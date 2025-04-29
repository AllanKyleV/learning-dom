// const newElement = document.createElement('input');
// document.body.appendChild(newElement)

const parag = document.createElement('p');
parag.textContent = "Hey I'm red";
parag.style.color = 'red';
document.body.appendChild(parag);

const subTitle = document.createElement('h3');
subTitle.textContent = "I'm a blue h3";
subTitle.style.color = "blue";
document.body.appendChild(subTitle);

const container = document.createElement('div');
container.style.backgroundColor = "pink";
container.style.border = '1px solid black'
document.body.appendChild(container);

const header = document.createElement('h1');
header.textContent = "I'm in a div";
container.appendChild(header);

const containerP = document.createElement('p')
containerP.textContent =  "ME TOO!";
container.append(containerP)