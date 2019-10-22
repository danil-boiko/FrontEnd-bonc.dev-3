var task_id = 1;
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
    newdiv.innerHTML = `<div class="task" id="task_${a}"><div id='active-task'><button class="check" id="btn_check_${a}" onclick="checkTask(this)">&#9989;</button><div class='task_title' id='task_title_${a}'>${name}</div><div class='task_desc' id="task_desc_${a}">${desc}</div></div><div class='task-buttons'><button class='edit-btn' id="btn_${a}" data-toggle="modal" data-target="#editModal" onclick="id_Task(this)">EDIT</button><button class='delete-btn' id="del_btn_${a}" onclick="deleteTask(this)">DEL</button></div></task>`;
    document.getElementById("first_parentId").append(newdiv);
}

function id_Task(obj){
    btn_id = obj.id;
    btn_id = btn_id.substring(4,btn_id.length + 1);
}

function editTask() {
    var name = document.getElementById("task-name-input-edit").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input-edit").value; //забираем описание задачи
    var new_name = document.getElementById(`task_title_${btn_id}`);
    var new_desc = document.getElementById(`task_desc_${btn_id}`);
    console.log(`task_title_${btn_id}`);
    console.log(`task_desc_${btn_id}`);
    new_name.innerHTML = `${name}`;
    new_desc.innerHTML = `${desc}`;
}

function deleteTask(obj){
    var focus_task_id = obj.id;
    console.log(focus_task_id);
    focus_task_id = focus_task_id.substring(8,focus_task_id.length + 1);
    console.log(focus_task_id);
    var task = document.getElementById(`task_${focus_task_id}`);
    task.remove();
}

function checkTask(obj){
    var check_task_id = obj.id;
    console.log(check_task_id);
    check_task_id = check_task_id.substring(10,check_task_id.length + 1);
    console.log(check_task_id);
    var name = document.getElementById(`task_title_${check_task_id}`).innerHTML; //забираем название задачи
    var desc = document.getElementById(`task_desc_${check_task_id}`).innerHTML; //забираем описание задачи
    console.log(name);
    console.log(desc);
    var clone_div = document.createElement("div");
    clone_div.innerHTML = `<div class="task" id="task_${check_task_id}"><div id='active-task'><button class="check" id="btn_check_${check_task_id}" onclick="checkTask(this)">&#9989;</button><div class='task_title' id='task_title_${check_task_id}'>${name}</div><div class='task_desc' id="task_desc_${check_task_id}">${desc}</div></div><div class='task-buttons'><button class='edit-btn' id="btn_${check_task_id}" data-toggle="modal" data-target="#editModal" onclick="id_Task(this)">EDIT</button><button class='delete-btn' id="del_btn_${check_task_id}" onclick="deleteTask(this)">DEL</button></div></task>`;
    var div = document.getElementById(`task_${check_task_id}`);
    div.remove();
    clone_div.id = `task_check_${check_task_id}`;
    document.getElementById("second_parentId").append(clone_div);
}