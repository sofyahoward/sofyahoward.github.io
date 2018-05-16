//Redirect to mobile version on mobile devices
// $(window).on('load resize',function(){
//   if($(window).width() < 950){
//       window.location = "https://www.google.com"
//   }
// });

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  window.location = "https://www.google.com"; 
}

//Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
      opacity: .7,
    });

  });

