// Get the star image element
const star = document.getElementById("star");

// Set the maximum number of points
const maxPoints = 10;

// Set the current number of points (replace with your own value)
const currentPoints = 7;

// Calculate the percentage of points
const percentPoints = (currentPoints / maxPoints) * 100;

// Convert the percentage to a color value (replace with your own color scheme)
const color = `rgb(${255 - percentPoints * 2.55}, ${percentPoints * 2.55}, 0)`;

// Set the star's background color to the calculated color
star.style.backgroundColor = color;