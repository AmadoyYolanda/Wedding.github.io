// This file contains the JavaScript code for the webpage. 
// It includes functionality such as event handling and DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to My Webpage!';

    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});