
var buttons = document.querySelectorAll('.item4 a, .item5 a');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        this.parentNode.querySelector('.overlay').classList.add('show');
    });
}



function showOverlay() {
    document.getElementById("overlay").style.display = "block";
  }
