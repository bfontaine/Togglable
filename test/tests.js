(function($) {

    describe( 'Initialization', function() {

        it( 'should add a .togglable method on $.fn', function() {
            expect( typeof $.fn.togglable ).to.equal( 'function' );
        });

        it( 'should return itself', function() {

            var $p = $( '<p/>' );

            expect( $p.togglable() ).to.equal( $p );

        });

    });

    describe( 'Default options', function() {

        var g = {}; // global

        beforeEach(function() {

            $.mockjaxClear();

            g.$p = $( '<p/>' ).append('<span class="togglable"/>');
            g.$s = g.$p.children().first();

            g.$p.togglable({ url: '/test' });

        });

        it( 'should initialize .togglable elements’ html', function() {

            expect( g.$s.html() ).to.not.equal( '' );
            expect( g.$s.children().length ).to.equal( 2 );

        });

    });

})(jQuery);
