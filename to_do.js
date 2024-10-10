function addTask(){
   var newTask=document.getElementById('new-task')
 var tasklist=document.getElementById('task-list') 
   if(newTask.value===''){
        alert("Enter the task");
        return;
    }
     var ListItem=document.createElement('li')
     ListItem.innerText=newTask.value

     var buttoncontainers=document.createElement('div')
     buttoncontainers.className="task-button"

     var deletebutton=document.createElement('button')
     deletebutton.innerText='Delete'

     deletebutton.onclick=function(){
       tasklist.removeChild(ListItem);
     };

     var compltebutton=document.createElement('button')
     compltebutton.innerText='Complete'
     compltebutton.onclick=function(){
        ListItem.classList.toggle('Complete')
     };

     buttoncontainers.appendChild(compltebutton)
     buttoncontainers.appendChild(deletebutton)
     ListItem.appendChild(buttoncontainers)
     tasklist.appendChild(ListItem)
     newTask.value="";
}
