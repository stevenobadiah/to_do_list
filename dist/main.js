(()=>{var e={15:e=>{e.exports=class{constructor(e,t,n,d){this.id=e,this.title=t,this.due_date=n,this.creation_date=new Date,this.description=d,this.completion=!1,this.tasks=[]}markComplete(){this.completion=!0}markIncomplete(){this.completion=!1}addTask(e){this.tasks.push(e)}removeTask(e){for(var t=0;t<this.tasks.length;t++)tasks[t]==e&&this.tasks.splice(t,1)}}},507:e=>{e.exports=class{constructor(e,t,n,d,i){this.id=e,this.title=t,this.due_date=n,this.creation_date=new Date,this.description=d,this.priority=i,this.completion=!1}markComplete(){this.completion=!0}markIncomplete(){this.completion=!1}}}},t={};function n(d){var i=t[d];if(void 0!==i)return i.exports;var o=t[d]={exports:{}};return e[d](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(15),t=n.n(e),d=n(507),i=n.n(d);const o=document.getElementById("projectsList"),l=document.getElementById("currentTasks"),a=document.getElementById("completedTasks");var c,s,r=[];function m(e,t){1==e.completion?t.style.borderBottom="thick solid green":"High"==e.priority?t.style.borderBottom="thick solid red":"Medium"==e.priority?t.style.borderBottom="thick solid orange":"Low"==e.priority&&(t.style.borderBottom="thick solid yellow")}function u(e){s=e;for(var t=0;t<c.tasks.length;t++){let n=document.getElementById("taskNode"+c.tasks[t].id),d=document.getElementById("taskDescription"+c.tasks[t].id);d.innerHTML=e.description,c.tasks[t].id==e.id?(n.style.backgroundColor="rgb(255, 253, 157)",d.style.display="block"):(n.style.backgroundColor="rgb(255, 255, 255)",d.style.display="none")}}function p(e){let t=document.createElement("div");t.classList.add("task"),t.id="taskNode"+e.id,t.addEventListener("click",(function(){u(e)}),!1);let n=document.createElement("p");n.classList.add("taskTitle"),n.innerHTML=e.title,n.id="taskTitle"+e.id;let d=document.createElement("p");d.classList.add("taskDueDate"),d.innerHTML=e.due_date,d.id="taskDueDate"+e.id;let i=document.createElement("p");i.classList.add("taskDescription"),i.innerHTML=e.description,i.id="taskDescription"+e.id,i.style.display="none";let o=document.createElement("button");o.innerHTML="Edit",o.classList.add("taskEditBtn"),o.id="editProject"+c.id+"Task"+e.id;let s=document.createElement("button");s.innerHTML="Delete",s.classList.add("taskDeleteBtn"),s.id="deleteProject"+c.id+"Task"+e.id;let r=document.createElement("p");r.classList.add("completionLabel"),r.innerHTML="Task Completed:";let p=document.createElement("input");p.type="checkbox",p.classList.add("taskCompleteCheckBox"),p.id="completeProject"+c.id+"Task"+e.id,1==e.completion?p.checked=!0:p.checked=!1,t.appendChild(n),t.appendChild(d),t.appendChild(i),t.appendChild(o),t.appendChild(s),t.appendChild(r),t.appendChild(p),0==e.completion?l.appendChild(t):a.appendChild(t),m(e,t)}function y(e){c=e,function(){for(;l.firstChild;)l.removeChild(l.lastChild);for(;a.firstChild;)a.removeChild(a.lastChild)}(),function(e){let t=document.getElementById("projectTitleDisplay"),n=document.getElementById("projectDescriptionDisplay"),d=document.getElementById("projectDueDateDisplay");t.innerHTML=e.title,n.innerHTML=e.description,null!==e.due_date&&""!==e.due_date?d.innerHTML="Due Date: "+e.due_date:d.innerHTML="";for(var i=0;i<e.tasks.length;i++)p(e.tasks[i])}(e);for(var t=0;t<r.length;t++){let n=document.getElementById("project"+r[t].id);r[t].id==e.id?n.style.border="thick solid yellow":n.style.border="1px dashed grey"}}function k(e){let t=document.createElement("div");t.id="project"+e.id,t.classList.add("row","project"),t.addEventListener("click",(function(){y(e)}),!1);let n=document.createElement("p");n.classList.add("projectTitle"),n.innerHTML=e.title,n.id="projectTitle"+e.id,t.appendChild(n);let d=document.createElement("button");d.innerHTML="Edit",d.classList.add("projectEditBtn"),d.id="editProject"+e.id,t.appendChild(d),o.appendChild(t)}function E(){document.getElementById("addProjectFormContainer").style.display="none"}function g(){document.getElementById("editProjectFormContainer").style.display="none"}function B(){document.getElementById("addTaskFormContainer").style.display="none"}function h(){document.getElementById("editTaskFormContainer").style.display="none"}function I(){document.getElementById("addProjectFormContainer").style.display="none",document.getElementById("editProjectFormContainer").style.display="none",document.getElementById("addTaskFormContainer").style.display="none",document.getElementById("editTaskFormContainer").style.display="none"}function v(){I(),document.getElementById("addProjectFormContainer").style.display="block"}function T(){I(),null==c?alert("Please create or select a project, first"):document.getElementById("addTaskFormContainer").style.display="block"}function D(e){return 0==e.length?0:1==e.length?1:e[e.length-1].id+1}const L=e=>{e.preventDefault();let n=new(t())(D(r),document.getElementById("projectTitle").value,document.getElementById("projectDueDate").value,document.getElementById("projectDescription").value);r.push(n),k(n),y(n),document.getElementById("projectTitle").value="",document.getElementById("projectDueDate").value="",document.getElementById("projectDescription").value="",E()},C=e=>{c.title=document.getElementById("editProjectTitle").value,c.due_date=document.getElementById("editProjectDueDate").value,c.description=document.getElementById("editProjectDescription").value,document.getElementById("projectTitle"+c.id).innerHTML=document.getElementById("editProjectTitle").value,document.getElementById("projectTitleDisplay").innerHTML=document.getElementById("editProjectTitle").value,document.getElementById("projectDueDateDisplay").innerHTML="Due Date: "+document.getElementById("editProjectDueDate").value,document.getElementById("projectDescriptionDisplay").innerHTML=document.getElementById("editProjectDescription").value,g()},j=e=>{e.preventDefault();let t=new(i())(D(c.tasks),document.getElementById("taskTitle").value,document.getElementById("taskDueDate").value,document.getElementById("taskDescription").value,document.getElementById("taskPriority").value);c.tasks.push(t),p(t),document.getElementById("taskTitle").value="",document.getElementById("taskDueDate").value="",document.getElementById("taskDescription").value="",document.getElementById("taskPriority").value="",B()},f=e=>{s.title=document.getElementById("editTaskTitle").value,s.due_date=document.getElementById("editTaskDueDate").value,s.description=document.getElementById("editTaskDescription").value,s.priority=document.getElementById("editTaskPriority").value;let t=document.getElementById("taskNode"+s.id);document.getElementById("taskTitle"+s.id).innerHTML=document.getElementById("editTaskTitle").value,document.getElementById("taskDueDate"+s.id).innerHTML=document.getElementById("editTaskDueDate").value,0==s.completion?l.appendChild(t):a.appendChild(t),m(s,t),u(s),h()};document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("btnSubmitProject").addEventListener("click",L),document.getElementById("btnEditProject").addEventListener("click",C),document.getElementById("btnSubmitTask").addEventListener("click",j),document.getElementById("btnEditTask").addEventListener("click",f)})),document.body.addEventListener("click",(e=>{if(e.target.classList.contains("projectEditBtn")){var t=(n=e.target.getAttribute("id")).charAt(n.length-1);i=r.find((e=>e.id==t)),I(),document.getElementById("editProjectFormContainer").style.display="block",document.getElementById("editProjectTitle").value=i.title,document.getElementById("editProjectDueDate").value=i.due_date,document.getElementById("editProjectDescription").value=i.description,c=i}else if(e.target.classList.contains("taskEditBtn"))t=(n=e.target.getAttribute("id")).charAt(n.length-1),d=c.tasks.find((e=>e.id==t)),I(),document.getElementById("editTaskFormContainer").style.display="block",document.getElementById("editTaskFormContainer").style.display="block",document.getElementById("editTaskTitle").value=d.title,document.getElementById("editTaskDueDate").value=d.due_date,document.getElementById("editTaskDescription").value=d.description,document.getElementById("editTaskPriority").value=d.priority,s=d;else if(e.target.classList.contains("taskDeleteBtn"))t=(n=e.target.getAttribute("id")).charAt(n.length-1),function(e){let t=document.getElementById("taskNode"+e.id);0==e.completion?l.removeChild(t):a.removeChild(t);for(var n=0;n<c.tasks.length;n++)c.tasks[n]==e&&c.tasks.splice(n,1)}(c.tasks.find((e=>e.id==t)));else if(e.target.classList.contains("taskCompleteCheckBox")){var n;t=(n=e.target.getAttribute("id")).charAt(n.length-1),function(e){let t=document.getElementById("taskNode"+e.id);document.getElementById("completeProject"+c.id+"Task"+e.id).checked?(e.markComplete(),l.removeChild(t),a.appendChild(t)):(e.markIncomplete(),a.removeChild(t),l.appendChild(t)),m(e,t)}(c.tasks.find((e=>e.id==t)))}var d,i})),document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("btnAddProject").addEventListener("click",v),document.getElementById("btnCancelAddProject").addEventListener("click",E),document.getElementById("btnCancelEditProject").addEventListener("click",g),document.getElementById("btnAddTask").addEventListener("click",T),document.getElementById("btnCancelAddTask").addEventListener("click",B),document.getElementById("btnCancelEditTask").addEventListener("click",h)})),function(){let e=new Date((new Date).setFullYear((new Date).getFullYear()+1));e="2025-05-19";let n=new(t())(0,"Default Project",e,"default project description"),d=new(i())(0,"Default Task 1",e,"First task to complete","Low"),o=new(i())(1,"Default Task 2",e,"Second task to complete","Low");r.push(n),k(n),y(n),p(d),p(o),c.tasks.push(d),c.tasks.push(o)}()})()})();