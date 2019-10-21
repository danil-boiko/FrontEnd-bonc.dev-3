function addTask() {

    var name = document.getElementById("task-name-input").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input").value; //забираем описание задачи
    //создаем новый блок и присваиваем переменной newdiv
    var newdiv = document.createElement("div"); 
    //заполняем созданный блок
    newdiv.innerHTML = `<div class="task"><div id='active-task'><div id='task_title'>${name}</div><div id='task_desc'>${desc}</div></div><div class='task-buttons'><button class='edit-btn' data-toggle="modal" data-target="#editModal">E</button><button class='delete-btn'>C</button></div></task>`;
    document.getElementById("parentId").append(newdiv);
}

function editTask() {
    var name = document.getElementById("task-name-input-edit").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input-edit").value; //забираем описание задачи
    console.log(name);
    console.log(desc);
    task_title.innerHTML = '';
    task_desc.innerHTML = '';
}