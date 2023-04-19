var slideIndex = 1;
showSlides(slideIndex);


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
