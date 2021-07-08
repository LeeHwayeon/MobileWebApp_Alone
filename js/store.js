$(function () {
      //store category btn
      $('#store #contents .category>a:nth-child(8)').click(function () {
        $(this).css('display', 'none');
        $('#store #contents .category>a:nth-child(n+9)').removeClass('act').css('display', 'block');
      });

    });