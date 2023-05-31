$(document).ready(function() {

   // INPUT MASK PHONE NUMBER
   $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99", "showMaskOnHover": false})

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


    // CLIENTS IMG SLIDER MOBILE
    let clientSlider
    let clientSliderInit
    
    function clientSliderRun() {
        if ($(window).width() < 744) {
            if(!clientSliderInit) {
              clientSliderInit = true
              clientSlider = new Swiper(`.services-clients .swiper`, {
                    slidesPerView: 'auto',
                    spaceBetween: 18,
                    freeMode: true,
                    slidesOffsetAfter: 0
                })
            }
        } else {
            if (typeof clientSlider !== "undefined") {
              clientSliderInit = false
              clientSlider.destroy()
            }
        }
    }
    
    clientSliderRun()

    $(window).on('resize', function() {
      clientSliderRun()
    })

    // REVIEWS SLIDER
    
    let reviewsSlider = new Swiper(`.reviews .swiper`, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,

      navigation: {
        nextEl: '.reviews .nav-arrow--right',
        prevEl: '.reviews .nav-arrow--left',
      },

      breakpoints: {
        744: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1260: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    })

})