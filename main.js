$(document).ready(function(){
//  $('.Box').on('click', function(){
//    alert('押されたよ');
//    console.log('押されたよ！');
//  });
//$('#hide').on('click', function(){
//    var aaa = function(){
//  $('#ex').empty();
//};
//  setTimeout(aaa,2000);
//$('#ex').hide().fadeOut('slow');
//});
//$('#show').on('click', function(){
//  var bbb =function(){
//    $('#ex').detach();
//  };
//  setTimeout(bbb,2000);
//});

//fadeout fadein countup を用いる。

$('#all').fadeIn(4000);

  // button要素をクリックしたら発動
  $('#all').click(function() {
    $('#ex').append('<br>カキクケコ');
    $('#ex').css("background-color","black");
    $('#ex').css("color","white");

    $('#ex').prepend("<br>あいうえお<br>");
    $('#ex').append("<br>さしすせそ");
    $("#ex:odd").css("background-color","white");
  });




});
