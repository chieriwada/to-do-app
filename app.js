function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContext = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
