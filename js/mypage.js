$(function(){


    // HEADER 탭메뉴 동작
    var tabMenu = $('.tab-wrap>ul>li>a');
     var tabContent = $('.tab-wrap .tab-content');

     tabMenu.click(function(e){
       tabMenu.removeClass('on');
       tabContent.css('display', 'none');

       $(this).addClass('on').next().css('display', 'block');
       e.preventDefault();
     });


     // MY PAGE 탭메뉴 동작
     var tabTitle = $('#mypage .tab-title>ul>li');
     var tabCont = $('#mypage .tabCont');

     tabTitle.click(function(e){

      var index = $(this).index();

      tabTitle.removeClass('tab-active');
      tabTitle.eq(index).addClass('tab-active');
      tabCont.css('display','none');
      tabCont.eq(index).css('display','block');

       e.preventDefault();
     });


     //USER-INFOR 탭메뉴 sticky 동작

     $(window).scroll(function(){

     var WinPos = $(window).scrollTop();
     var TabPos = $('#mypage .tab-title>ul>li').offset().top;
     var Tab = $('#mypage .tab-title>ul>li');

    //  console.log(TabPos);
    //  console.log(WinPos);

     if(WinPos >= 173 ){ 
      Tab.addClass('sticky');
      }else{
        Tab.removeClass('sticky'); }
     });

    });//제이쿼리 끝