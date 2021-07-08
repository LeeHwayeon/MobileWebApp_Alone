$(function(){
     
   var basketBtn = $('.gallery>ul>li>span:nth-child(3)>a:nth-child(1)');
   var productTag1 = $('.gallery ul li span:nth-child(5)');
   var productTag2 = $('.gallery ul li span:nth-child(6)');
   var checkNum =0;
    
   //제품보기 : 로드 시, 자동 펼치기
   setTimeout(function(){
    basketBtn.animate({'width': 70}, 400);
        productTag1.css({'display':'block'});
        productTag2.css({'display':'block'});
   },500);

     //제품보기 : 클릭 시, 수동 펼치기
    basketBtn.click(function(e){

      if(checkNum == 0){
        basketBtn.animate({'width': 70}, 400);
        productTag1.css({'display':'block'});
        productTag2.css({'display':'block'});
        checkNum =1;
      }else{
        basketBtn.animate({'width': 22}, 400);
        productTag1.css({'display':'none'});
        productTag2.css({'display':'none'});
        checkNum = 0;
      }
      e.preventDefault();
    });
     
     
   });//제이쿼리 끝