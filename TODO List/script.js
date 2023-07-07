const forms = document.querySelector("#forms");
const input = document.querySelector("#input-text");
const list = document.querySelector("#list");

forms.addEventListener("submit", e =>{
    e.preventDefault();
    //console.log(input.value)

    // creating a div and adding a value from the input to the list 
    const item = document.createElement('li');
    item.innerHTML = input.value
    item.classList.add('list-item');
    //console.log(item)

    //adding to the list
    list.appendChild(item)

    //clear the  input string :
    input.value = '';

    //deleting the value in the list;
    item.addEventListener('click' , () => {
        item.remove();
    })
})