const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


var deleteTask = function() {
    console.log("Deleting ")
    var listItem = this.parentNode
    var ul = listItem.parentNode
    ul.removeChild(listItem)
    countUncheck()
    countListElements()
    
}

var countUncheck = function () {
    var check = document.getElementsByClassName(classNames.TODO_CHECKBOX).length
    var checkSelector = document.querySelectorAll('input[type="checkbox"]:checked').length
    uncheckedCountSpan.textContent = check - checkSelector
}

var countListElements = function () {
    var count = document.querySelectorAll('li').length
    console.log("var count= " + count);

    itemCountSpan.textContent = count 
}

function newTodo() {
    //alert('New TODO button clicked!')
    const listElement =  Object.assign({}, classNames)
    listElement.TODO_TEXT = classNames.TODO_TEXT 

    var element = document.createElement('li')
    element.className = classNames.TODO_ITEM
    //element.appendChild(listElement.TODO_TEXT)
    var liText = document.createTextNode(listElement.TODO_TEXT)

    // create button delete
    var button = document.createElement('button')
    button.append(classNames.TODO_DELETE)
    button.className = classNames.TODO_DELETE
    

    // create checkbox
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = classNames.TODO_CHECKBOX

    // create the li and append it to the UL
    element.appendChild(checkbox)
    element.appendChild(liText)
    element.appendChild(button)
  
    list.appendChild(element)
    var count = document.querySelectorAll('li').length
    console.log("var count= " + count);

    itemCountSpan.textContent = count 

    var check = document.getElementsByClassName(classNames.TODO_CHECKBOX).length
    var checkSelector = document.querySelectorAll('input[type="checkbox"]:checked').length
    uncheckedCountSpan.textContent = check - checkSelector

    button.onclick = deleteTask
    checkbox.onclick = countUncheck
}


