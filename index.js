// function displaydate() {
//     let date = new Date()
//     date = date.toString().split(" ")
//     document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
// }

// window.onload = function(){
//     displaydate()
// }


//// UPDATED JS

const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const task = document.querySelector('#tasks');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        alert('Please add a task!')
    } else {
        // const task = input.value;

        const paragraph= document.createElement('p')
        paragraph.innerText = input.value;
        paragraph.classList.add('p'); //this class connects to CSS for styling
        task.appendChild(paragraph);
        input.value = "";

        paragraph.addEventListener('click', () => {
            paragraph.style.textDecoration = 'line-through';
        })


        paragraph.addEventListener('dblclick', () => {
            task.removeChild(paragraph);
        })


        // another option below but I don't know how to manage EDIT and DELETE buttons

        // const buttonEdit = document.createElement('button')
        // buttonEdit.classList.add('edit');
        // buttonEdit.innerHTML = 'Edit';
        // taskList.appendChild(buttonEdit);

        // const buttonDelete = document.createElement('button')
        // buttonDelete.classList.add('delete');
        // buttonDelete.innerHTML = 'Delete';
        // taskList.appendChild(buttonDelete);
        // input.value = "";

        // buttonEdit.addEventListener('click', () => {
        //     if (buttonEdit.innerText === 'edit'){
        //         paragraph.removeAttribute('input');
        //     buttonEdit.innerText = 'Save';
        //     } else {
        //         return;
        //     }          
        // })

        // buttonDelete.addEventListener('click', () => {
        //     taskList.removeChild(paragraph);
            
        // })
  
   
    };
});
