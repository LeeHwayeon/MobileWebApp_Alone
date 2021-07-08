$(function () {

      const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

      });

      var tabMenu = $('.tab-wrap>ul>li>a');
      var tabContent = $('.tab-wrap .tab-content');

      //초기값 설정
      $('.tab-wrap>ul>li:first-child>a').addClass('on').next().css('display', 'block');

      tabMenu.click(function () {
        tabMenu.removeClass('on');
        tabContent.css('display', 'none');

        $(this).addClass('on').next().css('display', 'block');
      });


    });