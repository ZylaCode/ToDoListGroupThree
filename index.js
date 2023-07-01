function displaydate() {
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}

window.onload = function(){
    displaydate()
}

document.querySelector(".add").addEventListener("click", () => {
    let item = document.querySelector("#myInput")
    createItem(item)
})

function addItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let text = document.createTextNode(inputValue);

    li.appendChild(text);


    if (inputValue === '') {
        alert('Please add an item on the list!');
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";
   
    } 

const checkbox = document.querySelectorAll('.checkbox');

let unchecked = true;

checkbox.forEach((checkbox)=>{
checkbox.addEventListener("click", (event)=>{
    if (unchecked){checkbox.src = "imgs/square-check-regular.svg";
} else {
    checkbox.src = "imgs/square-regular.svg"
}
unchecked = !unchecked
});
});
