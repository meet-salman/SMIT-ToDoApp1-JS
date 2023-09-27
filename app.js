const input = document.querySelector('#input'); 
const ul = document.querySelector('#list');


function createElement(userElement , userText) {
    const element = document.createElement(userElement);
    const textNode = document.createTextNode(userText);
    element.appendChild(textNode);
    return element;
}

function addToDo(e) {
    e.preventDefault();
    const li = createElement('LI' , input.value);

    const editBtn = createElement('BUTTON' , 'Edit');
    editBtn.setAttribute('onclick' , 'editToDo(this)')

    const deleteBtn = createElement('BUTTON' , 'Delete');
    deleteBtn.setAttribute('onclick' , 'deleteToDo(this)')
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ul.appendChild(li);
    input.value = ''
}


function deleteToDo(element) {
    ul.removeChild(element.parentNode);
}

function editToDo(element) {
    const newValue = prompt('Enter New Value');
    element.parentNode.childNodes[0].nodeValue = newValue

}














