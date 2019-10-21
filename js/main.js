var num = 1;

function addQuestion() {
    var newdiv = document.createElement("div");
    newdiv.innerHTML = "<div id='active-task'><div id='task-title'>Название задачи</div><div id='task-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</div></div>";
    //newdiv.appendTo('div#quest');
    document.getElementById("parentId").appendChild(newdiv);
    return false;
}