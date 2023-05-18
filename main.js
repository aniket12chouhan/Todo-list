const inputbox = document.querySelector("input");
const listContainer = document.querySelector("ul");
const tododeading = document.querySelector('h2')

function addtodo() {


    if (inputbox.value === '') {
        alert("please add your todo :-")
    }
    else {
        let newli = document.createElement("li");
        newli.className = 'todotext'
        newli.innerHTML = inputbox.value;
        let btndelete = document.createElement('button')
        btndelete.className = 'btn-red'
        btndelete.innerHTML = 'Delete';
        newli.appendChild(btndelete)

        listContainer.appendChild(newli)
    }

    inputbox.value = ''
    savaData();
}


function deleteTodo(e) {
    if (e.target.className.includes("btn-red")) {
        e.target.parentElement.remove();
        savaData();

    }

}


listContainer.addEventListener("click", deleteTodo)


function savaData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask()