function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const toDos = [];

  function renderTheUI() {
    const TODO_LIST = document.getElementById('toDoList');

    TODO_LIST.textContent = '';

    toDos.forEach(function(toDo){

      //add new li
      const NEW_LI = document.createElement('li');

      //add checkbox to li
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";

      //add delete button to li
      const DELETE_BTN = document.createElement('button');
      DELETE_BTN.innerHTML = '<img src="delete-icon.svg" />';
      DELETE_BTN.style.border = "none";
      DELETE_BTN.style.colorFill = "blue";
      DELETE_BTN.style.cssFloat = "right";

      //text content of li is from todo list input
      NEW_LI.textContent = toDo.title;

      //add new elements to new li
      TODO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(DELETE_BTN);
    });
  }

  function createNewToDo() {
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TODO_TEXT.value) { return; }

    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false
    });

    NEW_TODO_TEXT.value = '';

    renderTheUI();
  }

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
