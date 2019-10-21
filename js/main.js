var num = 1;

function addQuestion() {
    var newdiv = document.createElement("div");
    newdiv.innerHTML = "<div id='original-wrapper'>\n<div  class='form-1'>\n<form id='question' method='post'>\n<div><strong>Вопрос №[ " + num++ + "]<\/strong><\/div>\n<div style='float:left'><strong>Тип вопроса&nbsp;<\/strong><\/div>\n<div><select>\n<option>С вариантами ответа<\/option>\n<option>На сопоставление<\/option>\n<option>С полем ввода ответа<\/option>\n<\/select>\n<\/div>\n<div><strong>Описание вопроса<\/strong><\/div><\/form><\/div><\/div>";
    //newdiv.appendTo('div#quest');
    document.getElementById("parentId").appendChild(newdiv);
    return false;
}