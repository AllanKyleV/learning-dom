// Select objects
const red = document.querySelector('#red-btn');
const yellow = document.querySelector('#yellow-btn');
const blue = document.querySelector('#blue-btn');
const box = document.querySelector('.box');

// Function
// function changeColor() {
    
// };

// Event
red.addEventListener("click", function() {
    box.style.backgroundColor = "red";
});

yellow.addEventListener("click", function() {
    box.style.backgroundColor = "yellow";
});

blue.addEventListener("click", function() {
    box.style.backgroundColor = "blue";
});