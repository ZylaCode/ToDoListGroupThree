//// UPDATED JS

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
let taskList = document.querySelector('#tasks');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        alert("Please Enter a Task");
    } else {
        const newTask = document.createElement('div')
        newTask.innerText = input.value;
        // newTask.classList.add('div'); //CSS styling
        taskList.appendChild(newTask);
        input.value = "";

        const newTaskActions = document.createElement('div'); //creates and stores task actions(delete, edit buttons)
        // newTaskActions.classList.add('actions'); // CSS styling
        newTask.appendChild(newTaskActions);


        // creating DELETE button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'DELETE';
        newTaskActions.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteTask) 

        // function that executes DELETE
        function deleteTask(){
            taskList.removeChild(newTask);
            
        }  

        // creating EDIT button
        const editButton = document.createElement('button');
        editButton.innerText = 'EDIT';
        newTaskActions.appendChild(editButton);
        editButton.addEventListener('click', () => {
            if(editButton.innerText === 'EDIT'){
                input.focus();
                editButton.innerText = 'SAVE'  // something missing to SAVE new task !!!
             } else {
                 editButton.innerText = 'EDIT';         
              }
})
}
})



const checkbox = document.querySelectorAll('.checkbox');

            	let unchecked = true;

                checkbox.forEach((checkbox)=>{
                checkbox.addEventListener("click", ()=>{
                     if (unchecked){checkbox.src = "imgs/square-check-regular.svg";
                    } else {
                     checkbox.src = "imgs/square-regular.svg"
                     }
                     unchecked = !unchecked
        });
        });


        // paragraph.addEventListener('click', () => {
        //     paragraph.style.textDecoration = 'line-through';
        // })


        // paragraph.addEventListener('dblclick', () => {
        //     task.removeChild(paragraph);
        // })