 // Function to scroll back to the top
 function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Show/hide the button based on scroll position
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var button = document.getElementById("btt");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }