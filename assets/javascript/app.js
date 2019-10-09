console.log("I am connected");

// (function($) {
//     "use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
// $(".js-scroll-trigger").click(function () {
//     console.log("btn working");
//     //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

//     $('html, body').animate({
//         scrollTop: (target.offset().top - 72)
//     }, 1000, "easeInOutExpo");

// });

//   })(jQuery); // End of use strict

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".js-scroll-trigger").on('click', function(event) {
        console.log("btn working");
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });