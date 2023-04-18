// Vælg alle knapper
var buttons = document.querySelectorAll('.item4 a, .item5 a');

// Loop igennem alle knapperne
for (var i = 0; i < buttons.length; i++) {
    // Tilføj en event listener til hver knap
    buttons[i].addEventListener('click', function() {
        // Vælg den nærmeste overlay-div og tilføj CSS-klassen 'show'
        this.parentNode.querySelector('.overlay').classList.add('show');
    });
}

// Vælg alle overlay-div'er
var overlays = document.querySelectorAll('.overlay');

// Loop igennem alle overlay-div'erne
for (var i = 0; i < overlays.length; i++) {
    // Tilføj en event listener til hver overlay-div
    overlays[i].addEventListener('click', function() {
        // Fjern CSS-klassen 'show' fra den klikkede overlay-div
        this.classList.remove('show');
    });
}

function showOverlay() {
    document.getElementById("overlay").style.display = "block";
  }