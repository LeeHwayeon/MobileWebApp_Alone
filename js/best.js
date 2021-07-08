$(function(){

      // sub-menu JS
      var submenuItem = $('.sub-menu a');

        submenuItem.click(function(e){
        submenuItem.removeClass('tab-on');
        $(this).addClass('tab-on');

        e.preventDefault();
      });

      var tabMenu = $('.tab-wrap>ul>li>a');
      var tabContent = $('.tab-wrap .tab-content');

      tabMenu.click(function(e){
      tabMenu.removeClass('on');
      tabContent.css('display', 'none');

      $(this).addClass('on').next().css('display', 'block');
      e.preventDefault();
      });
      

    });