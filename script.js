//* introduktion javascript Sarah *//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

//* introduktion slut *//

function showSlides() {
  console.log("showSlides() called");
  window.addEventListener('DOMContentLoaded', function() {
    var images = [
      "Billeder/mandag.png",
      "Billeder/tirsdag.png",
      "Billeder/onsdag.png",
      "Billeder/torsdag.png",
    ];
    
    var currentIndex = 0;
    
    function nextImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      var slideshow = document.getElementById("slideshow");
      slideshow.src = images[currentIndex];
    }
    
    setInterval(nextImage, 5000); // Change image every 3 seconds
    
  });
}
