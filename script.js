var button = document.getElementById("enter");
var userinput = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return userinput.value.length;
}

function addItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userinput.value + " "));
	var butt = document.createElement("button");
	butt.appendChild(document.createTextNode("Delete"));
	li.appendChild(butt);
	ul.appendChild(li);
	userinput.value = "";
}

function addItemafterClick(){
	if (inputLength() > 0)
		addItem();
}

function addItemafterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13)
		addItem();	
}

button.addEventListener("click", addItemafterClick);
userinput.addEventListener("keypress", addItemafterKeypress);


// // Toggle item in list. 
// var check = document.getElementById("eleOne");
// check.addEventListener("click", CrossOutFunc);

// function CrossOutFunc(){
// 	check.classList.toggle("done");
// }

// // Delete one specific item in 
// 	var del = document.getElementById("eleOne");
// 	del.addEventListener("click", deleteItem);

// function deleteItem(){
// 	del.remove(del.selectedIndex);
// }

//Delete multiple items
var del1 = document.getElementById("eleOne");
del1.addEventListener("click", function(){
	del1.remove(del1.selectedIndex);
});

var del2 = document.getElementById("eleTwo");
del2.addEventListener("click", function(){
	del2.remove(del2.selectedIndex);
});

var del3 = document.getElementById("eleThree");
del3.addEventListener("click", function(){
	del3.remove(del3.selectedIndex);
});

var del4 = document.getElementById("eleFour");
del4.addEventListener("click", function(){
	del4.remove(del4.selectedIndex);
});

var del5 = document.getElementById("eleFive");
del5.addEventListener("click", function(){
	del5.remove(del5.selectedIndex);
});

var del6 = document.getElementById("eleSix");
del6.addEventListener("click", function(){
	del6.remove(del6.selectedIndex);
});


// Read value color and change linear-gradient background
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");



color1.addEventListener("input",gradientBackground);

color2.addEventListener("input", gradientBackground);

function gradientBackground(){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")" ;			
	h3.textContent = body.style.background ;
}

























