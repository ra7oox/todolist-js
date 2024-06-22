var user_input=document.getElementById("input_user")

function ajouter(){
    if(user_input.value==""){
        alert("please fill the input")
    }
    else{
        var li=document.createElement("li")
        var ul=document.querySelector("ul")
        li.innerHTML="<div class='out'>"+user_input.value+"<button onclick='supprimer(this)' id='delete'>delete</button></div>"
        ul.appendChild(li)
    }
}
function supprimer(btn){
    var ligne=btn.parentNode
    ligne.parentNode.removeChild(ligne)
}