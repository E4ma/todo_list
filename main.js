let addToDoButton = document.getElementById('addToDo');

// this is me creating a variable with name addToDoButton since first we state our variables

let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// now I add an event listener to my button

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    // a new paragraph will be created at every click

    // to add paragragh styling class that has been stated in style.css to style the paraghs as they are created
    paragraph.classList.add('paragraph-styling');


    // this sets the inner text of my paragraph
    paragraph.innerText = inputField.value;

    // now I append the paragraph to my toDo container
    toDoContainer.appendChild(paragraph);

    
    // so input field is empty after every addition
    inputField.value = '';

    // another eventlistner for paragraph so on one click a line cancels the paragraph + on double click paragraph is taken off
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

})

