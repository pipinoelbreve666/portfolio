// Preloader: ocultar cuando la página termina de cargar
$(window).on('load', function() {
    $('.preloader').fadeOut(500);
});

$(document).ready(function() {
    // Smooth Scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });

    // Header Scroll Effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });

    // Portfolio Load More
    let currentItems = 4;
    const loadMoreBtn = $('.load-more-btn');
    const portfolioItems = $('.portfolio-item');

    // Initially hide items beyond the first 4
    portfolioItems.slice(currentItems).hide();

    loadMoreBtn.on('click', function() {
        const hiddenItems = portfolioItems.slice(currentItems, currentItems + 2);
        hiddenItems.fadeIn(500);
        currentItems += 2;

        // Hide load more button if no more items
        if (currentItems >= portfolioItems.length) {
            loadMoreBtn.fadeOut(300);
        }
    });

    // Portfolio Hover Effect
    $('.portfolio-item').hover(
        function() {
            $(this).find('.portfolio-overlay').css('opacity', '1');
            $(this).find('.portfolio-content').css('transform', 'translateY(0)');
        },
        function() {
            $(this).find('.portfolio-overlay').css('opacity', '0');
            $(this).find('.portfolio-content').css('transform', 'translateY(20px)');
        }
    );
});
