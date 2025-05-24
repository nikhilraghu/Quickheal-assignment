
// Owl Carousel Initialization


$(document).ready(function () {
    $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: { items: 3 },
            600: { items: 4 },
            1000: { items: 6 }
        }
    });
});