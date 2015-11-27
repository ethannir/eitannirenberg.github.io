$(function() {


/////// Mobile Menu /////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });


///// fix hidden links on window resize/////
  $(window).resize(function(){
    if ($(window).width()> 700) {
      $('#menu-links').removeAttr('style')
    }
  });




//Stop Video
$('.modal').on('hidden.bs.modal', function (e) {
  $('video').attr("src", $("video").attr("src"));
});

// $(function() {
//     var iframe = $('#player1')[0];
//     var player = $f(iframe);
//     var status = $('.status');

//     // When the player is ready, add listeners for pause, finish, and playProgress
//     player.addEvent('ready', function() {
//         status.text('ready');
        
//         player.addEvent('pause', onPause);
//         player.addEvent('finish', onFinish);
//         player.addEvent('playProgress', onPlayProgress);
//     });

//     // Call the API when a button is pressed
//     $('button').bind('click', function() {
//         player.api($(this).text().toLowerCase());
//     });

//     function onPause(id) {
//         status.text('paused');
//     }

//     function onFinish(id) {
//         status.text('finished');
//     }

//     function onPlayProgress(data, id) {
//         status.text(data.seconds + 's played');
//     }
// });


});




