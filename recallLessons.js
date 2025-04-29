// Here's what I can recall from what I have learned from the DOM lesson.
// Ps. I know that I missed a lot, but here's what remains in my head so far.

// Selecting elements
document.querySelector()
const title = document.querySelector('h1');
title.innerHTML = "I'm the title"

document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()

// Creating elements
const btn = document.createElement('button');
btn.textContent = "I'm a content!";
btn.style.color = "blue";
document.body.appendChild(btn)

// Modifying Element
const title = document.getElementById('title');
title.innerHTML = "Modified title!";
title.style.color = "white";
title.setAttribute('style', 'font-weight: 500; background-color: black;');

// Events
    // There are 3 different methods in handling events
        // Method 1
        // <button onclick="alert('Hello!')">I'm a button</button>

        // Method 2
        // <button id="btn">I'm a button</button>
        const btn = document.querySelector('#btn');
        btn.onclick = () => alert('Hello!')

        // Method 3
        // <button id="btn">I'm a button</button>
        btn.addEventListener('click', () => {
            alert('Hello!')
        })