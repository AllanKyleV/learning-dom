const container = document.querySelector('#container');

function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}
container.addEventListener("click", function (e) {
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = getRandomColor();
    }
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
});
