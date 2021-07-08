$(function () {

      var loginBtn = $('#login_btn');

      function success() {
        var inputId = $('#input_id').val();
        var inputPw = $('#input_pw').val();

        if (inputId == 'mobile' && inputPw == '1234') {
          alert('로그인 성공');

          loginBtn.attr('href', 'trend.html');
        } else {
          alert('로그인 실패');

          loginBtn.attr('href', '#');
        }
      }

      //로그인 버튼을 클릭하면 함수를 실행하게
      loginBtn.click(function () {
        success(); // 실제로 로그인, 비번이 맞는지 확인 하는 함수는 success()
      });

    });