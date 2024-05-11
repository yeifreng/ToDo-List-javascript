const date = document.getElementById('date')
const list = document.getElementById('list')
const inputValue = document.getElementById('addTask')
const btnAdd = document.getElementById('send')


btnAdd.addEventListener('click', addTask);

function datoInput(){
    let dato = inputValue.value
    console.log(dato)
}

//Funcion para crear la tarea

function ask(taskValue){
    const element = `<li id="task-element">
                        <i class="far fa-circle co" data="done" id="0"></i>
                        <p class="text">${taskValue}</p>
                        <i class="fas fa-trash de" data="remove" id="1"></i>
                     </li>`
    
          list.insertAdjacentHTML("beforeend",element)
}

//Fucion para agregar la tarea
function addTask(){
    const taskInput = inputValue.value
    if(taskInput){
        ask(taskInput)
    }
    inputValue.Value = ''
}




