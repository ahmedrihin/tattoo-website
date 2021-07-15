$(document).ready(function(){
    
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'dots'
    });

    $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        responsiveRefreshRate: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items:1
            },
            1000:{
                items: 2

            },
            1200:{
                items: 2
            }

        }

    })


    $('#about-sticky-menu').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky')
        }
        else{
            $('nav').removeClass('sticky')
        }
    });

    $('#nav').onePageNav({
        currentClass: 'current'
    });

})


function openNav(){
    document.getElementById('hamburger-overlay').style.width = '30%'
};

function closeNav(){
    document.getElementById('hamburger-overlay').style.width = '0'
}