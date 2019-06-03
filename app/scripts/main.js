jQuery(document).ready(function($) {
    // Fullpage.js
    $('#fullpage').fullpage({
        licenseKey: '5E154A8E-77574575-843193BC-36825F00',
        anchors: ['Welcome', 'About', 'Councils', 'Contact'],
        sectionsColor: ['transparent', '#ffffff', '#fff', '#fff'],
        verticalCentered: true,
        css3:false,
        continuousVertical: false,
        slidesNavigation: true,
        touchSensitivity: 50,
        responsiveWidth: 767
    });

    $(document).on('click', '.enlarge', function(){
        $.fn.fullpage.setAllowScrolling(false);
    });

    $(document).on('click', '.turnScrollOn', function(){
        $.fn.fullpage.setAllowScrolling(true);
    });

    // ekko lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });
    });
});

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
