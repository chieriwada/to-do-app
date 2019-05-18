function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

<<<<<<< HEAD
    //get the text
    let title = NEW_TODO_TEXT.value;

    //create new li
    let newLi = document.createElement('li');

=======
    //create new li
    let newLi = document.createElement('li');

    //create title element
    let newLiTitle = document.createElement('text');

    //style newLiTitle
    newLiTitle.style.fontFamily = "Roboto","Helvetica","Arial","sans-serif";
    newLiTitle.style.fontSize = "1em";
    newLiTitle.style.padding = "0 1rem 0 1.5rem";

>>>>>>> assignment-5-DOM-part1
    //create new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

<<<<<<< HEAD
    //set the title
    newLi.textContent = title;
=======
    //get the text
    let title = NEW_TODO_TEXT.value;

    //create delete button
    let deleteBtn = document.createElement('button');

    //style deleteBtn
    deleteBtn.innerHTML = '<img src="delete-icon.svg" />';
    deleteBtn.style.border = "none";
    deleteBtn.style.colorFill = "blue";
    deleteBtn.style.cssFloat = "right";

    //delete button action
    deleteBtn.addEventListener('click', function(event) {
      TODO_LIST.removeChild(this.parentElement);
    });
>>>>>>> assignment-5-DOM-part1

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

<<<<<<< HEAD
=======
    //set the title
    newLiTitle.textContent = title;

    //add title text
    newLi.appendChild(newLiTitle);

    //show delete button
    newLi.appendChild(deleteBtn);

>>>>>>> assignment-5-DOM-part1
    //attach the li to the ul
    TODO_LIST.appendChild(newLi);

    //empty the input
    NEW_TODO_TEXT.value = "";

  });
}

window.onload = function() {
  onReady();
};
