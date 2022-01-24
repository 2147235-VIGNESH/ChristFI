/**********ADD ITEM  */

//*****search */
const SEARCH = document.forms['search-item'].querySelector('input'); 

//add EVENT LISTner 
SEARCH.addEventListener('keyup', (e)=>{
    //lets grab the user text // convert to lower
    let text = e.target.value.toLowerCase(); 
    // grab each li tag 

    let courseList = document.querySelector('#courseList ul')
    let courses = courseList.getElementsByTagName('li');

})

//*******hide items  */

let checkbox= document.querySelector('#hide'); 
checkbox.addEventListener('change', (e) =>{

    let courseList = document.getElementById('course-list'); 
    if(checkbox.checked) {
        courseList.style.display = 'none'; 
    }else{
        courseList.style.display ='block';
    }
    

})


// creating the list items dynamically 
 let li = document.createElement('li');
 let courseListName = document.createElement('span');
 let deleteButton = document.createElement('span');



 //the spans are nested within the li element 
 li.appendChild(courseName);
 li.appendChild(deleteButton);

 // attach out new DOM 
 ul.appendChild(li);

 //add text 
 courseName.textContent = text; 
 deleteButton.textContent = 'delete'; 

 
 let formAdd = document.getElementById('add-item');
// attach an event listner 
FormDataEventListener('submit', (e) =>{

    let ul = document.getElementByIdName('ul')[0];
    // prevent the page from refreshing 
    e.parentDefault();
// lets grab user's tect 
let text = formAdd.querySelector('input').value; 


//creating the list items directly 
let li = document.createElement('li');
let courseName = document.createElement('span');
let deleteButton = document.createElement('span');

// the spans are nested within li element 
 
li.appendChild(courseName); 
li.appendChild(deleteButton);

});





/*********DELETE ITEMS */

let courselistUL = document.querySelector('#courselist-list ul');



//add event listener 

courselistUL.addEventListener('click',remove);

// define handler 
function Delete(e) { 
    let target = e.target; 
    if(target.className == 'Delete '){
        let li = target.parentElement; 
        li.remove();
    }

}
