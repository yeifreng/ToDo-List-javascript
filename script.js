const date = document.getElementById('date')
const list = document.getElementById('list')
const inputValue = document.getElementById('addTask')
const btnAdd = document.getElementById('send')

const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id = 0

const array = [];



btnAdd.addEventListener('click', addTaskClick);
document.addEventListener('keyup', addTaskEnter)

//Para mostrar la fecha

const dateNow = new Date()
date.innerHTML = dateNow.toLocaleDateString('es-CO',{weekday:'long',month:'short',day:'numeric'})


//Funcion para crear la tarea

function ask(taskValue, id, done, remove){

    if (remove) {
        return
    }

    const taskCheck = done ?check :uncheck
    const line = done ?lineThrough :''
    const element = `<li id="task-element">
                        <i class="far ${taskCheck} co" data="doneTask" id="${id}"></i>
                        <p class="text ${line}">${taskValue}</p>
                        <i class="fas fa-trash de" data="removeTask" id="${id}"></i>
                     </li>`
    
          list.insertAdjacentHTML("beforeend",element)
}

//Fucion para agregar la tarea con un click
function addTaskClick(){
    const taskInput = inputValue.value
    if(taskInput){
        ask(taskInput,id,false,false)
        array.push({
            nombre: taskInput,
            id: id,
            done: false,
            remove:false
        })
    }
    
    inputValue.value = ''
    id++
}


//Fucion para agregar la tarea con un enter
function addTaskEnter(event){
    if (event.key == 'Enter') {
        const taskInput = inputValue.value
    if(taskInput){
        ask(taskInput,id,false,false)
        array.push({
            nombre: tarea,
            id: id,
            done: false,
            remove:false
        })
    }
    inputValue.value = ''
    id++
    }
}


list.addEventListener('click', checkData)


function doneTask(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    array[element.id].done = array[element.id].done ?false :true
}

function removeTask(element){

        element.parentNode.parentNode.removeChild(element.parentNode)
        array[element.id].remove = true 

}


function checkData(event){
    const element = event.target
    const elementData = element.attributes.data.value
    if (elementData == 'doneTask') {
        doneTask(element)
    }else if (elementData == 'removeTask'){
        removeTask(element)
    }
}