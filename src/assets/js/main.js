$(document).ready(function() {

   // INPUT MASK PHONE NUMBER
   $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"})

   // HEADER FIXED
   $(window).on('scroll', function() {
      if ($(window).scrollTop() > $('header').height()) {
        $('header').addClass('header-fixed')
      } else if ($(window).scrollTop() == 0) {
        $('header').removeClass('header-fixed')
        $('header').removeClass('header-backscroll')
      }
    })
    
    let lastScrollTop = 0;
    $(window).scroll(function(){
        let currentScroll = $(this).scrollTop()
        if (currentScroll > lastScrollTop){
            $('.header-fixed').removeClass('header-backscroll')
        } else {
            $('.header-fixed').addClass('header-backscroll')
        }
        lastScrollTop = currentScroll
    })

})