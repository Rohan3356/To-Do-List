//ToDo List

//Global variable

var taskList=[];

//=======================add item function============================//
function addItem(){
	var task=document.getElementById("todoInput").value;
	var ul=document.getElementById('myUl');
	
	//check that the empty string
	if(task.trim().length===0){
	   return false;
	   }
	   
	else{
	if(taskList.length<5){
		//add item to the array
	   taskList.push(task);
		
		//Creating a li element
		var li=document.createElement("li");
		var text=document.createTextNode(task);
		li.appendChild(text);
		
		// for check Mark
		var checkMark=document.createElement("button");
		checkMark.innerHTML="&check;";
		checkMark.className="listItemButton";
		checkMark.setAttribute("onclick","checkMe(this)");
		li.appendChild(checkMark);
		
		//for crossMark
		var crossMark=document.createElement("button");
		crossMark.innerHTML="&#x2715";
		crossMark.className="listItemButton";
		crossMark.setAttribute("onclick","removeMe(this)");
		li.appendChild(crossMark);
		
		ul.appendChild(li);
		//alert(taskList);
		reset();
		
	   }//end of if
	}  // end of else
}
// end of additem function

//======================function reset=====================//

function reset(){
	document.getElementById("todoInput").value="";
}//end of reset function


//=========================function checkMe=====================//

function checkMe(item){
	//alert(item);
	var liTag=item.parentElement;
	//alert(liTag);
	liTag.style.textDecoration=(liTag.style.textDecoration==="line-through") ? "none" : "line-through";
}//end of the checkMe function

//===========================function RemoveMe========================//

function removeMe(item){
	//alert(item);
	var liTag=item.parentElement;
	var ulTag=liTag.parentElement;
	ulTag.removeChild(liTag);
	//alert(taskList);
	taskList.pop();
	//alert(taskList);
}//end of the remove me function 

//==================================Enter key===============//

function enterKey(){
	var input=document.getElementById("todoInput");
	input.onkeyup = function(key){
		if(key.keyCode===13){
		   addItem();
		   }//end of if
	}//end of onkeyup
}

enterKey();

//===========================function clear document=========================//

function clearList(){
	//to remove all the childnodes of li
	var ul=document.getElementById("myUl");
	ul.innerHTML="";
	taskList.splice(0,taskList.length);
}






























