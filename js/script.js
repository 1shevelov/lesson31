var btn1 = document.getElementById("btn1"),
		btn2 = document.getElementById("btn2"),
		main = document.getElementById("main"),
		myList = document.getElementById("list"),
		ul = document.getElementsByTagName("ul"),
		item = myList.getElementsByClassName("item"),
		popup = document.getElementsByClassName("popup")[0],
		close = document.querySelector(".close");


// console.log(btn1);
// console.log(btn2);
// console.log(ul[0]);

function addItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "New task";
	newLi.className = "item";
	myList.appendChild(newLi);
	closePopup();
}

function delItem() {
	myList.removeChild(item[0]);
	if(item.length == 0){
		popup.style.display = "block";
	}
}

function closePopup() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup)