function addQuestion() {

    var name = document.getElementById("task-name-input").value; //забираем название задачи
    var desc = document.getElementById("task-desc-input").value; //забираем описание задачи
    
    //создаем новый блок и присваиваем переменной newdiv
    var newdiv = document.createElement("div"); 
    //заполняем созданный блок
    newdiv.innerHTML = "<div id='active-task'><div id='task-title'>Задача без названия</div><div id='task-desc'>Описание отсутствует</div></div>";
    document.getElementById("parentId").appendChild(newdiv);
    return false;
}