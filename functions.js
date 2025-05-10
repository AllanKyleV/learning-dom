// Method 1
function alertFunction() {
    alert('Hello Method 1');
}

// Method 2
const btn =  document.querySelector('#btn');
function sayHello() {
    alert('Hello')
}
btn.onclick = sayHello;

// Method 3 
const btn2 = document.querySelector('#btn-2');
// function greet() {
//    alert('Welcome!')
//}
// btn2.addEventListener('click', greet);

btn2.addEventListener("click", function (e) {
    console.log(e);
});

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', function (e) {
    console.log(e.target)
})