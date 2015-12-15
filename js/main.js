$(function() {


/////// Mobile Menu /////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle(200);
  });


///// fix hidden links on window resize/////
  $(window).resize(function(){
    if ($(window).width()> 700) {
      $('#menu-links').removeAttr('style')
    }
  });




//Stop Video
$('.modal').on('hidden.bs.modal', function (e) {
  $(this).find('video')[0].pause();
});


// // possible fix
// if(window.stop !== undefined) {
//     window.stop();
//   } else if(document.execCommand !== undefined) {
//       document.execCommand("Stop", false);
//   }
// }

});



