//selector

const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector('.todobutton');
const todoList=document.querySelector('.todo-list');

//event listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);



//function

function addTodo(event){
	//prevent form submitting
	event.preventDefault();
	//tododiv
	const todoDiv =document.createElement("div");
	todoDiv.classList.add("todo");
	//create li
	const newTodo=document.createElement('li');
	newTodo.innerText=todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//checkmark button
	const completedButton=document.createElement('button');
	completedButton.innerHTML=  '<i class="fas fa-check-circle"></i>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	//trash button
	const trashButton=document.createElement('button');
	trashButton.innerHTML= '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);
	//appned to list
	todoList.appendChild(todoDiv);
	todoInput.value="";
}

function deleteCheck(e){
	const item= e.target;
	if(item.classList[0] === 'trash-btn'){
		const todo =item.parentElement;
		todo.remove();
	}
	if(item.classList[0] === 'complete-btn'){
		const todo =item.parentElement;
		todo.classList.toggle('completed');
	}
}