$(function(){
 
    //BACK BOX sticky 동작 &  참견톡 쓰기 자동 등장

    $(window).scroll(function(){

var WinPos = $(window).scrollTop();
var BackPos = $('#interior .back').offset().top;
var Back = $('#interior .back');
var upBtn = $('#interior .interior-title>div>a ');

//  console.log(TabPos);
//  console.log(WinPos);

if(WinPos >= 173 ){ 
  Back.addClass('back-active');
  upBtn.addClass('upBtn');
 }else{
  Back.removeClass('back-active');
  upBtn.removeClass('upBtn');
 }
});
   

//참견톡 클릭시, 체크버튼 활성화하기

var $item1 = $('.c1 .choice').on('click', function(e) {
var idx = $(this).index();

if ( idx == 0 ) {
  $item1.find('a').removeClass('chk');
  $item1.find('a').eq(0).addClass('chk');
}else{
  $item1.find('a').removeClass('chk');
  $item1.find('a').eq(1).addClass('chk')
}
e.preventDefault();
});


var $item2 = $('.c2 .choice').on('click', function(e) {
var idx = $(this).index();

if ( idx == 0 ) {
$item2.find('a').removeClass('chk');
$item2.find('a').eq(0).addClass('chk');
}else{
$item2.find('a').removeClass('chk');
$item2.find('a').eq(1).addClass('chk')
}
e.preventDefault();
});


var $item3 = $('.c3 .choice').on('click', function(e) {
var idx = $(this).index();

if ( idx == 0 ) {
$item3.find('a').removeClass('chk');
$item3.find('a').eq(0).addClass('chk');
}else{
$item3.find('a').removeClass('chk');
$item3.find('a').eq(1).addClass('chk')
}
e.preventDefault();
});



 });//제이쿼리 끝