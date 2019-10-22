var task_id = 0;
function generateTaskId(){
    return task_id++
}

function addTask() {

    var name = document.getElementById("task-name-input").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input").value; //забираем описание задачи
    //создаем новый блок и присваиваем переменной newdiv
    var newdiv = document.createElement("div"); 
    //заполняем созданный блок
    var a = generateTaskId();
    console.log(a);
    newdiv.innerHTML = `<div class="task" id="task_${a}"><div id='active-task'><div class='task_title' id='task_title_${a}'>${name}</div><div class='task_desc' id="task_desc_${a}">${desc}</div></div><div class='task-buttons'><button class='edit-btn' id="btn_${a}" data-toggle="modal" data-target="#editModal" onclick="id_Task(this)">E</button><button class='delete-btn' onclick="deleteTask()">C</button></div></task>`;
    document.getElementById("parentId").append(newdiv);
}

function id_Task(obj){
    btn_id_edit = obj.id;
}

function editTask(obj) {
    console.log(btn_id_edit)
    var name = document.getElementById("task-name-input-edit").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input-edit").value; //забираем описание задачи
    //console.log(name);
    //console.log(desc);
    //task_title.innerHTML = '';
    //task_desc.innerHTML = '';
}

function deleteTask(){
    return this.document.getElementById("id").remove();
}