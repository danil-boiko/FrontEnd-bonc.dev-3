function addTask() {

    var name = document.getElementById("task-name-input").value; //забираем название задачи
    console.log(name);
    var desc = document.getElementById("task-desc-input").value; //забираем описание задачи
    console.log(desc);
    //создаем новый блок и присваиваем переменной newdiv
    var newdiv = document.createElement("div"); 
    //заполняем созданный блок
    newdiv.innerHTML = `<div class="task"><div id='active-task'><div id='task_title'>${name}</div><div id='task_desc'>${desc}</div></div><div class='task-buttons'><button class='edit-btn'>E</button><button class='delete-btn'>C</button></div></task>`;
    document.getElementById("parentId").append(newdiv);
}