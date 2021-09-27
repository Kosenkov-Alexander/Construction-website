// Hero swiper
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
// JQuery accordion
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });

    $(".ui-accordion-header").click(function(){
     $(this).blur();
});
  });

// Open/Close mobile menu
document.querySelector('.menu__mobile').addEventListener('click', () => {
  document.querySelector('.slider-menu').classList.toggle('slider-menu-hide')
})

// Close menu btn
document.querySelector('.nav-mobile__btn').addEventListener('click', () => {
  document.querySelector('.slider-menu').classList.toggle('slider-menu-hide')
})

