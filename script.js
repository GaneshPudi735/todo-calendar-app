let arr=[
    {task:"breakfast",time:"8 am"},
    {task:"practice",time:"9 am"},
    {task:"chill",time:"10 am"},
];
const monthYear = document.getElementById("monthYear");
const dates = document.getElementById("dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


let currentDate = new Date();


function renderCalendar() {
dates.innerHTML = "";


const year = currentDate.getFullYear();
const month = currentDate.getMonth();


const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();


const months = [
"January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];


monthYear.innerText = `${months[month]} ${year}`;


for (let i = 0; i < firstDay; i++) {
const empty = document.createElement("div");
empty.classList.add("date", "inactive");
dates.appendChild(empty);
}


for (let day = 1; day <= lastDate; day++) {
const dateEl = document.createElement("div");
dateEl.classList.add("date");
dateEl.innerText = day;


const today = new Date();
if (
day === today.getDate() &&
month === today.getMonth() &&
year === today.getFullYear()
) {
dateEl.classList.add("today");
}


dates.appendChild(dateEl);
}
}


prevBtn.onclick = () => {
currentDate.setMonth(currentDate.getMonth() - 1);
renderCalendar();
};


nextBtn.onclick = () => {
currentDate.setMonth(currentDate.getMonth() + 1);
renderCalendar();
};


renderCalendar();
function display(){
   let tasks=arr.reduce(function(value,obj,ind){
      return value+`
      <li>${obj.task}(${obj.time})<button onclick="deleteTask(${ind});" id="dlt"> Delete🗑️</button></li>
      `;
   },"")
   // console.log(tasks);
   let strtasks=`
   <ol>${tasks}</ol>
   `
   console.log(strtasks)
   document.getElementById("tasks").innerHTML=strtasks
   document.getElementById("taskAdd").value = "";
   document.getElementById("timeAdd").value = "";
}
display();
function addTask(){
   let task=document.getElementById("taskAdd").value;
   let time=document.getElementById("timeAdd").value;
   let obj = {
        time: time,
        task: task
    };
    if(task==""&time==""){
         alert("enter task and time")
    }
    else{
      arr.push(obj);
    display();
    const tasksDiv = document.getElementById("tasks");
    tasksDiv.scrollTop = tasksDiv.scrollHeight;
    }
}
function deleteTask(ind){
   arr.splice(ind,1);
   display();
}