
let btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);
let listDiv=document.getElementById("list");
function myFunction() {
  let a = document.getElementById("inputArea").value;
  if (a == "") {
    alert("You have not Enterd Any Task");
  }
   else {
let addwork=document.createElement("ul");
addwork.innerHTML=`${a} <i class="fa-solid fa-delete-left"></i> `;
listDiv.appendChild(addwork);
////////////////this make empty the input field////////
document.getElementById("inputArea").value="";
////////////////////for adding function to delete button///////////////////
addwork.querySelector("i").addEventListener("click",secondFun);

function secondFun(){
  addwork.remove();
}

  }
}

