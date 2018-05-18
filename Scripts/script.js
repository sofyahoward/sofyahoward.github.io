// redirect if on mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  window.location = "https://sofyahoward.github.io/portfolio-m"; 
}

// Contact form JS
window.onload = function(){ 
  // Get the modal
var contactForm = document.getElementById('formContainer');

// Get the button that opens the modal
var btn = document.getElementById("contactFormBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
formContainer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    contactForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 if (event.target == formContainer) {
   formContainer.style.display = "none";
 }
}
};

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

// MODAL TRIGGER
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
      opacity: .7,
    });

  });

  // CLICK-ENABLED MOBILE MENU
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });


 
