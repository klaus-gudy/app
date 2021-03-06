// SELECTORS
const container_div = document.getElementById('cont');

const h1_header = document.createElement('h1');
h1_header.className = 'p-4';
h1_header.innerText = 'javascript app';

container_div.append(h1_header);

const hr = document.createElement('hr');
container_div.append(hr);

const card_div = document.createElement('div');
card_div.className = 'card';
container_div.append(card_div);

const h2 = document.createElement('h2');
h2.className = 'py-2';
h2.innerText = 'add a book';
card_div.appendChild(h2);

const form = document.createElement('form');
form.className = 'd-flex justify-content-xl-center';
card_div.appendChild(form);

const form_div = document.createElement('div');
form_div.className = 'form-group p-2';
form.appendChild(form_div);

const text_input = document.createElement('input');
text_input.setAttribute('type','text');
text_input.setAttribute('id','task');
text_input.setAttribute('placeholder', 'enter a book name');
form_div.appendChild(text_input);

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.setAttribute('id', 'submit');
button.setAttribute('type', 'submit');
button.innerText = 'submit';
form_div.appendChild(button);

const unli = document.createElement('ul');
unli.className = 'list-group';
card_div.appendChild(unli);

const clear_button = document.createElement('button');
clear_button.className = 'btn btn-secondary';
clear_button.setAttribute('id', 'clear');
clear_button.setAttribute('type', 'submit');
clear_button.innerText = 'clear';
container_div.appendChild(clear_button);

// LOADING EVENT LISTENERS
loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks); //when using local storage after refreshing
    form.addEventListener('submit', addTask);
    unli.addEventListener('click', removeTask);
    clear_button.addEventListener('click', clearAll);

}

// FUNCTIONS
function addTask(e){
    if(text_input.value === ''){alert("add a task")}else{
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center'; // li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(text_input.value));
    const span = document.createElement('span');
    span.className = 'delete-item';    
    span.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(span);
    unli.appendChild(li)

    //store in local  storage
    storeInLocalStorage(text_input.value);

    text_input.value = "";} //remove input words after submitting

    //prevent form from submitting
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        e.target.parentElement.parentElement.remove();

        //remove tasks from storage
        removeLocalStorage(e.target.parentElement.parentElement);
    }
}

function clearAll(){
    while(unli.firstChild){
        unli.removeChild(unli.firstChild);
    }

    clearAllFromLocalStorage();
}

function storeInLocalStorage(task){
    let tasks;
    // check if there is something in local storage 
    if(localStorage.getItem('tasks') === null){
        tasks = []; 
    }else{
        //in local storage things stay as strings 
        //we get them using json object turns into array
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//the stored values wont be diplay.....lets grab them
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []; 
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    //show every task on storage
    tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.appendChild(document.createTextNode(task));
    const span = document.createElement('span');
    span.className = 'delete-item';
    span.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(span);
    unli.appendChild(li)
    });
}

function removeLocalStorage(taskitem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []; 
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskitem.textContent === task){
            tasks.splice(index, 1)
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
} 

function clearAllFromLocalStorage(){
    localStorage.clear();
}