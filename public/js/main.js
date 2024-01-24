document.addEventListener("DOMContentLoaded", ()=>{

    let btnAdd = document.getElementById("btnAdd");
    let input = document.getElementById("input");
    let list = document.getElementById("list");
    let btnAll = document.getElementById("btnAll");
    let btnProgress = document.getElementById("btnProgress");
    let btnFinish = document.getElementById("btnFinish");


    function showAllTasks() {
        Array.from(list.children).forEach(box => {
            box.style.display = "flex";
        });
    }
    
    function showInProgressTasks() {
        Array.from(list.children).forEach(box => {
            let task = box.querySelector(".taskImportant");
            if (!task.classList.contains("confirm")) {
                box.style.display = "flex";
            } else {
                box.style.display = "none";
            }
        });
    }

    function showFinishedTasks() {
        Array.from(list.children).forEach(box => {
            let task = box.querySelector(".taskImportant");
            if (task.classList.contains("confirm")) {
                box.style.display = "flex";
            } else {
                box.style.display = "none";
            }
        });
    }

    btnAll.addEventListener("click", showAllTasks);
    btnProgress.addEventListener("click", showInProgressTasks);
    btnFinish.addEventListener("click", showFinishedTasks);



    function addTask () {
        let box = document.createElement("div");
        box.classList.add("box");
        list.appendChild(box);

        let task = document.createElement("input");
        task.classList.add("taskImportant");
        task.setAttribute('readonly','readonly')
        box.appendChild(task);
        task.classList.add("todo");

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


    let allBtnDelete 
    function supprimer() {
        allBtnDelete = document.querySelectorAll("#btnDelete");
        Array.from(allBtnDelete).forEach(element => {
            element.addEventListener("click", () => {
                element.parentElement.parentElement.remove();
            });
        });
    };

    let allBtnConfirm;
    function valider() {
        allBtnConfirm = document.querySelectorAll("#btnConfirm");
        Array.from(allBtnConfirm).forEach(element => {
            element.removeEventListener("click", confirmTask);
            element.addEventListener("click", confirmTask);
        });
    }

    function confirmTask(event) {
        let task = event.target.parentElement.parentElement.querySelector(".taskImportant");
        task.classList.toggle("confirm");
    }

    let allBtnModify;
    function modifier() {
        allBtnModify = document.querySelectorAll("#btnModify");
        Array.from(allBtnModify).forEach(element => {
            element.addEventListener("click", ()=>{
                element.parentElement.parentElement.firstChild.removeAttribute('readonly');
                element.parentElement.parentElement.firstChild.addEventListener("keydown", (ev) => {
                    if (element.parentElement.parentElement.firstChild.value == "") {
                        return false;
                        } else if (ev.key == 'Enter'){
                            element.parentElement.parentElement.firstChild.setAttribute('readonly','readonly');
                            }});
                        });
                    });
                };


    btnAdd.addEventListener("click", () => {
        if (input.value == "") {
            return false;
        } else {
            addTask();
            valider();
            supprimer();
            modifier()
        }
    });

    input.addEventListener("keydown", (ev) => {
        if (input.value == "") {
            return false;
        } 
        if (ev.key == 'Enter'){
            addTask();
            valider();
            supprimer();
            modifier()
        } 
    });
});
