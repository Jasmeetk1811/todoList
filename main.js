let userInput=document.getElementById('input');
document.getElementById('addTask').onclick=performTask;

function performTask()
{
	if(userInput.value === "")
	{
		alert("You have to add something in order to add to the list");
	}
	else
	{
		var name = userInput.value
		// create new elements in dom for user experience and interface
		let div = document.createElement('div');
		let para = document.createElement('p');
		let input = document.createElement('input');
		let btn = document.createElement('button');
		
		div.setAttribute('class','row');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('class', 'col-sm-1 p-5');
		para.textContent = name;
		para.setAttribute('class', 'col-sm-8');
		btn.textContent = 'x';
		btn.setAttribute('class', 'col-sm-2');

		// we have to append all children of the div element.
		div.appendChild(input);
		div.appendChild(para);
		div.appendChild(btn);
		
		// adding events on button
		// input.onclick = complete;
		input.onclick = (event) => {
			event.target.parentNode.setAttribute('class', 'bg-secondary');
		};

		// onclick listener for delete button of the dom
		btn.onclick = () => {
			event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		};
		document.getElementById('tasks').prepend(div);
	}
}