// Sticky Navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Hero Slider
$('.hero-slider').owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    dots: true,
    autoplay: true,
    lazyLoad: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*Counter jS */
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        },{
            duration: 5000,
            easing: 'swing',
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });

});