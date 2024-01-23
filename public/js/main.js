let btnAdd = document.getElementById("btnAdd");
let input = document.getElementById("input");
let box = document.querySelector(".box");
let list = document.getElementById("list");
let task = document.querySelector(".taskImportant");


function addTask () {
    let box = document.createElement("div");
    box.classList.add("box");
    list.appendChild(box);

    let task = document.createElement("input");
    task.classList.add("taskImportant");
    box.appendChild(task);

    let choice = document.createElement("div");
    choice.classList.add("choice");
    box.appendChild(choice);

    let btnConfirm = document.createElement("button");
    btnConfirm.classList.add("btnChoice");
    btnConfirm.setAttribute("id", "btnConfirm");
    choice.appendChild(btnConfirm);
    btnConfirm.innerText = "CONFIRM";

    let btnModify = document.createElement("button");
    btnModify.classList.add("btnChoice");
    btnModify.setAttribute("id", "btnModify");
    choice.appendChild(btnModify);
    btnModify.innerText = "MODIFY";

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btnChoice");
    btnDelete.setAttribute("id", "btnDelete");
    choice.appendChild(btnDelete);
    btnDelete.innerText = "DELETE";

    task.value = input.value;
    input.value = "";
};


btnAdd.addEventListener("click", () => {
    if (input.value == "") {
        return false;
    } else {
        addTask();
    }
});

function supprimer(params) {
    
}




// btnAdd.addEventListener('click', ()=>{
    // if (input.value == "") {
    //     return false;
    // };
    // newBox = box.cloneNode(true);
    // list.appendChild(newBox);
    // task.value = input.value;
    // input.value = "";
// });

// input.addEventListener("keydown", (ev) => {
//     if (input.value == "") {
//         return false;
//     };
//     if (ev.key == 'Enter'){
//         newBox = box.cloneNode(true);
//         list.appendChild(newBox);
//         input.value = ""
// }});
