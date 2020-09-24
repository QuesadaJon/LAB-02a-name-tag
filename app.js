const myName = document.getElementById('tag-name');
const myInput = document.getElementById('text');
const myButton = document.getElementById('the-button');

myButton.addEventListener('click', () =>{
    const userInput = myInput.value;
    myName.textContent = userInput;
})

const myNameTag = document.getElementById('name-tag-base')
const myPinkButton = document.getElementById('pink-button')

