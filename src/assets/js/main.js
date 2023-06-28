$(document).ready(function() {

   // INPUT MASK PHONE NUMBER
   $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99", "showMaskOnHover": false})

   // HEADER FIXED
   $(window).on('scroll', function() {
      if ($(window).scrollTop() > $('header').height() - 50) {
        $('header').addClass('header-fixed')
      } else if ($(window).scrollTop() == 0) {
        $('header').removeClass('header-fixed')
        $('header').removeClass('header-backscroll')
      }
    })


    // CLIENTS IMG SLIDER MOBILE
    let clientSlider
    let clientSliderInit
    
    function clientSliderRun() {
        if ($('.services-clients').length) {
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

    // BREADCRUMBS
    let breadcrumbsSlider
    let breadcrumbsSliderInit
    
    function breadcrumbsSliderRun() {
        if ($('.breadcrumbs-inner').length) {
          if ($(window).width() < 744) {
            if(!breadcrumbsSliderInit) {
              breadcrumbsSliderInit = true
              breadcrumbsSlider = new Swiper(`.breadcrumbs-inner.swiper`, {
                    slidesPerView: 'auto',
                    freeMode: true,
                    slidesOffsetAfter: 0
                })
            }
          } else {
              if (typeof breadcrumbsSlider !== "undefined") {
                breadcrumbsSliderInit = false
                breadcrumbsSlider.destroy()
              }
          }
        }
    }
    
    breadcrumbsSliderRun()

    $(window).on('resize', function() {
      breadcrumbsSliderRun()
    })

    // NEWS
    let newsSlider
    let newsSliderInit
    
    function newsSliderRun() {
        if ($('.breadcrumbs-inner').length) {
          if ($(window).width() < 744) {
            if(!newsSliderInit) {
              newsSliderInit = true
              newsSlider = new Swiper(`.tabs .swiper`, {
                    slidesPerView: 'auto',
                    freeMode: true,
                    slidesOffsetAfter: 0
                })
            }
          } else {
              if (typeof newsSlider !== "undefined") {
                newsSliderInit = false
                breadcrumbsSlider.destroy()
              }
          }
        }
    }
    
    newsSliderRun()

    $(window).on('resize', function() {
      newsSliderRun()
    })

})