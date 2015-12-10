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
  $('video').each(function(){
    $(this)[0].load();
  });
});

});




