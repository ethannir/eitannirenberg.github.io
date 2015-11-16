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


//////// fix vimeo height /////////

$(window).resize(function(){
    var tempwidth=$(".vimeoiframe").width();
    var tempheight=tempwidth/1.77;
    $(".vimeoiframe").css("height",tempheight);
});


});


