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
