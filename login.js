//let newheading = document.createElement("h2");
//newheading. textContent ="well come";
//console.log(newheading);
//document.body.appendChild(newheading);

//var newHeading = document.createElement("h2");

//newHeading.textContent = "New Heading";

//console.log(newHeading);

//let secondH = document.createElement("h3");
//secondH.innerHTML = "This is a dynamically created <strong>h3</strong> element.";




// let heading = document.createElement("h1");
// heading.textContent = "welcome to my website";
// document.body.appendChild(heading);
// heading.style.cssText= "color:blue; font-size:35px; margin-left:400px";


//  let para = document.createElement("p");
//  para.textContent = "hello , world ksjdcnask csak heleo for your teame aya nskdns";
//  document.body.appendChild(para);
//  para.style="font-size:21px; color:red;"




const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
    
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
       
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
       
        newTask.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
        
     
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            taskList.removeChild(newTask);
        });
        
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        
      
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}
