
 const item =document.querySelector("#item");
 const todobox = document.querySelector("#to-do-box");
 item.addEventListener("keyup",function(event){
 if(event.key=="Enter"){
  todo(this.value);
   this.value="";
  
}
}
)

 var todo=(item)=>{
 const listItem=document.createElement("li");
 
  listItem.innerHTML=`${item}  <button id="cancle">Cancle</button>`;
 todobox.appendChild(listItem);

}
