var listofActivities=[];
var input=document.getElementById("input");
var todolist=document.getElementById("todolist");
var btn=document.getElementById("button");
btn.onclick= click;
function click(){
    listofActivities.push(input.value);
    console.log(listofActivities)
    input.value=""
    showlist();
  
}
function showlist(){
    todolist.innerHTML=" ";
    listofActivities.forEach(function(n,i){
        todolist.innerHTML+="<li>"+n+"<a onclick='edititem("+i+")'>Edit</a>"+
        "<a onclick='deleteitem("+i+")'>&times|</a></li>";
    });
}
function deleteitem(i){
    listofActivities.splice(i,1);
    showlist();
}
function edititem(i){
    newvalue=prompt("Enter a new value");
    listofActivities.splice(i,1,newvalue)
    showlist();
}