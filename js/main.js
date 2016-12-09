//----- JAVASCRIPT MAIN -----//


$(document).ready(function(){

  $('input[type="submit"]').click(function(){

    var range1 = $('#box1').val();
    var range2 = $('#box2').val();
    var lightOn = false;

      for (var i = range1; i <= range2; i++){

        $('#l' + i).toggleClass('lightOn');

      }

  });

  $('#add').click(function(){

    var div = document.getElementById('#lightContainer');

    div.innerHTML = div.innerHTML + 'Extra stuff';

  });

});
