;(function( $ ) {

    /**
     * Default options
     **/
    var defaultOptions = {

        /**
         * This element is used to bind events on. Default: body.
         **/
        container : null,

        /**
         * Default values.
         **/
        values: [
            { label: 'yes', value: 1, selected: true },
            { label: 'no',  value: 0 }
        ]

    },
    
    /**
     * Namespace used for classes, jQuery data binding and events
     **/
    NS = 'togglable',
    
    ns_class = function( s ) { return NS + (s ? '-' + s : ''); },
    ns_sel   = function( s ) { return '.' + ns_class( s ); },
    ns_event = function( s ) { return s + '.' + NS; },
    ns_data  = function( s ) { return NS + s; };

    function updateText( $el ) {

        var vals = $el.data( ns_data( 'vals' ) );

        vals[0].$el.text( vals[0].val.label );
        vals[1].$el.text( vals[1].val.label );

    }

    $.fn.togglable = function( o ) {

        var $this = this,
            $els = $this.find( ns_sel() ),
            opts = $.extend( true, {}, defaultOptions ),
            $container, tpl;

        if ($els.length === 0) {

            return $this;

        }

        if ( typeof o === 'object' ) {

           $.extend( true, opts, o );

        }

        if ( opts.container === null ) {

            // If there is only one currently selected element,
            // use it as a container. If not, use the <body>.
            opts.container = $this.length === 0 ? $this : $( 'body' ).first();

        }

        $container = $( opts.container );

        $els.each(function( i, e ) {

            var $e     = $( e ),
                values = opts.values,
                url    = $e.data( ns_data( 'url' ) ) || opts.url,

                vals, v, children, current;

            if ( v = $e.data( ns_data( 'Values' ) ) ) {

                try {
                    values = JSON.parse( v );
                } catch( e ) {
                    values = v.split( ',' ).map(function( v ) {
                        return { value: v, label: v };
                    });
                }
                delete v;
            }

            if ( values.length < 2 ) { return; }

            values = values.slice( 0, 2 );

            $e.append(
                '<span class="' + ns_class('selected') + '"/>',
                ' (',
                '<a href="#" class="' + ns_class('selectable') + '"/>',
                ')'
            );

            children = $e.find( 'span, a' );

            current = values[1][ 'default' ] ? 1 : 0;

            $e.data( ns_data( 'vals' ), vals = [
                { $el: children.first(), val: values[current] },
                { $el: children.last(),  val: values[1^current] }
            ]);

            delete current;

            updateText($e);

            $e.on( ns_event( 'toggle' ), function( ev ) {

                var tmp = vals[1].val;
                vals[1].val = vals[0].val;
                vals[0].val = tmp;

                updateText($e);
            });

            $e.data( ns_data( 'url' ), url );

        });

        $container.on( 'click', ns_sel() + ' a', function( ev ) {

            var $this = $( this ).parent();

            $.post($this.data( ns_data( 'url' ) ), {
                value: $this.data( ns_data( 'vals' ) )[1].val.value
            }, function(data, status) {

                    if ( status === 'success' ) {

                        $this.trigger( ns_event( 'toggle' ) );

                    }

            });

            ev.stopPropagation();
             
        });

    };


})(jQuery, undefined);
