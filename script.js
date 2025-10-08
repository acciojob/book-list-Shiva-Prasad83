//your JS code here. If required.
const form=document.querySelector("form");
const tbody=document.getElementById("book-list");
let count=1;
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let tr=document.createElement("tr");
	tr.id=`row-${count}`
	let td1=document.createElement("td");
	td1.innerText=e.target[0].value;
	let td2=document.createElement("td");
	td2.innerText=e.target[1].value;
	let td3=document.createElement("td");
	td3.innerText=e.target[2].value;
	let td4=document.createElement("td");
	let button=document.createElement("button");
	button.innerText="X";
	button.style.color="white";
	button.style.backgroundColor="red";
	button.addEventListener("click",(e)=>{
		let itsParent=e.target.parentNode.parentNode;
		itsParent.remove();
	})
	td4.appendChild(button);
	tr.append(td1,td2,td3,td4);
	tbody.appendChild(tr);
	count+=1;
})