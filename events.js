const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
    alert('Hello World');
})

function alertFunction() {
    alert("Yay! You did it!")
}