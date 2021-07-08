$(function(){
     
    //일정시간 간격 후 페이지 이동하기 : setTimeout(함수명, 호출시간);
    function forwarding(){
      location.href = 'login.html';
    }
    setTimeout(forwarding, 3000);
     
   });