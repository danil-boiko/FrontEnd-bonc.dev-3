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
    newdiv.innerHTML = `<div class="task" id="task_${a}"><div id='active-task'><div class='task_title' id='task_title_${a}'>${name}</div><div class='task_desc' id="task_desc_${a}">${desc}</div></div><div class='task-buttons'><button class='edit-btn' id="btn_${a}" data-toggle="modal" data-target="#editModal" onclick="id_Task(this)">E</button><button class='delete-btn' onclick="deleteTask()">C</button></div></task>`;
    document.getElementById("parentId").append(newdiv);
}

function id_Task(obj){
    btn_id = obj.id;
    console.log(btn_id)
    btn_id = btn_id.substring(4,btn_id.length + 1);
}

function editTask() {
    console.log(btn_id)
    var name = document.getElementById("task-name-input-edit").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input-edit").value; //забираем описание задачи
    var new_name = document.getElementById(`task_title_${btn_id}`);
    var new_desc = document.getElementById(`task_desc_${btn_id}`);
    console.log(`task_title_${btn_id}`);
    console.log(`task_desc_${btn_id}`);
    new_name.innerHTML = `${name}`;
    new_desc.innerHTML = `${desc}`;
}

function deleteTask(){
    return this.document.getElementById("id").remove();
}