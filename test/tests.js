(function($) {

    describe( 'Initialization', function() {

        it( 'should add a .togglajax method on $.fn', function() {
            expect( typeof $.fn.togglajax ).to.equal( 'function' );
        });

        it( 'should add a .togglAjax method on $.fn', function() {
            expect( typeof $.fn.togglAjax ).to.equal( 'function' );
        });

        it( 'should return itself', function() {

            var $p = $( '<p/>' );

            expect( $p.togglajax() ).to.equal( $p );

        });

    });

    describe( 'Default options', function() {

        var g = {}; // global

        beforeEach(function() {

            $.mockjaxClear();

            g.$p = $( '<p/>' ).append('<span class="togglajax"/>');
            g.$s = g.$p.children().first();

            g.$p.togglajax({ url: '/test' });

        });

        it( 'should initialize .togglajax elements’ html', function() {

            expect( g.$s.html() ).to.not.equal( '' );
            expect( g.$s.children().length ).to.equal( 2 );

        });

    });

})(jQuery);
