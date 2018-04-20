//console.log('hello');


//get input
let filterInput = document.querySelector('#filter');

//listen: add event listener; keyup 
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	//test function is called
	// console.log(1);

	//get value of input
	let filterValue = filterInput.value.toUpperCase();
	// consult.log(filterValue);

	//get a ul list
	let ul = document.querySelector('#names')
	// consult.log(ul);

	//get all li items
	let li = document.querySelectorAll('li.cb-link');
	// console.log(li);

	//Loop through list items
	for(let i=0;i<li.length;i++){
		//get link
		let a = li[i].querySelector('a');
		//console.log(a);

		//if match -(filters address by letter input)
		if(a.innerHTML.toUpperCase().includes(filterValue)){
			li[i].style.display = 'block';
		}	else {
			li[i].style.display = 'none';
		}
	}
}