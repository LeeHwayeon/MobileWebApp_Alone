$(function(){

      // Slider1 Start
      const swiper1 = new Swiper('#slider1', {
        // Optional parameters
        // Default parameters
        slidesPerView: 1,
        loop: true,

        // direction: 'vertical', 'horizontal'
        direction: 'horizontal',
        loop: true,

         // If we need pagination
         pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        
        // Auto Play
        autoplay: {
          delay: 3000,
        }
      });


      // Slider2 Start
      const swiper2 = new Swiper('#slider2', {
        // Optional parameters
        // Default parameters
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // direction: 'vertical', 'horizontal'
        direction: 'horizontal',
        loop: true,
        
      });


      // Slider3 Start
      const swiper3 = new Swiper('#slider3', {
        // Optional parameters
        // Default parameters
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // direction: 'vertical', 'horizontal'
        direction: 'horizontal',
        loop: true,
        
      });

      // Controls
      $('#prev').click(function () {
        swiper.slidePrev();
      });

      $('#next').click(function () {
        swiper.slideNext();
      });



    });
