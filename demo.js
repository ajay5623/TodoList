 function add(){
 const todobox=document.querySelector("#to-do-box")
   
 var inputval=document.getElementById("item").value ;
   
 
   const listItem=document.createElement("li");
   listItem.innerHTML=`${inputval}<button>cancle</button>`
      
   listItem.addEventListener("click",
   function() {
    this.classList.toggle("done");
   }
   
   )  

   listItem.querySelector("button").addEventListener(
   "click",function (){
    listItem.remove();

   }

   )
   todobox.appendChild(listItem);
   
 }


