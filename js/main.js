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

//////// fade in on hover /////////

  // $('.motionreel>img.bottom').mouseover(function() {
  //     $('.motionreel>img.top').attr('style',"display:block");
  //     $('.motionreel>img.bottom').attr('style',"display:none");
  // });

  // $('.motionreel>img.bottom').mouseout(function() {
  //     $('.motionreel>img.top').attr('style',"display:none");
  //     $('.motionreel>img.bottom').attr('style',"display:block");
  // });


});


