function getRandomColor() {
    let color = [];
    for (i = 0; i < 3; i++) {
        color.push(Math.ceil(Math.random()*90));
    }
    return `hsl(${color[0]}% ${color[1]}% ${color[2]}%)`;
}

console.log(getRandomColor());

// Sum
const array = [6, 8, 9, 10, 12];

function sum(array) {
    return array.filter(num => num % 3 === 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(array));