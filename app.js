const task_list = document.querySelector('.task_list');
 const list = document.querySelector('.list');
 const input_value= document.getElementById('input_data'); 
 function addTask(){
   if(input_value.value===''){
    alert('Enter your task :)');
   }
   else{
    let li = document.createElement('li');
    li.innerHTML=input_value.value;
    list.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML=`&#10006;`;
    li.appendChild(span)
   }
   input_value.value='';
   
 }
 list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked');}
    else{
        e.target.parentElement.remove();
    }
 })
 