"use strict";

const taskInput = document.querySelector('input.task');
const lists = document.querySelector('.lists');

const favsSection = document.querySelector('.favs');
const favTitle = document.querySelector('.favs h3');
const favs = document.querySelector('.favs ul');
const favsItems = favs.children;

const tasksSection = document.querySelector('.tasks');
const tasksTitle = document.querySelector('.tasks h3');
const tasks = document.querySelector('.tasks ul');
const taskItems = tasks.children;

if ( favsItems.length === 0 ) {
  favsSection.style.display = 'none';
};

if ( taskItems.length === 0 ) {
  tasksSection.style.display = "none";
};

taskInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    let li = document.createElement('li');
    if (taskInput.value === "") {
      alert("Please add a task");
    } else {
      li.textContent = taskInput.value;
      attachButton(li);
      tasks.appendChild(li);
      tasksTitle.style.display = '';
      taskInput.value = '';

      tasksTitle.textContent = "Inbox";
      tasksSection.style.display = "";
    }
  }
});

lists.addEventListener('click', (event) => {

  const tag = event.target.tagName;
  const basevalue = event.target.className.baseVal;

  const clickArea1 = event.target.parentNode.parentNode.parentNode.parentNode.className;
  const clickArea2 = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.className;
  const clickArea3 = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className;

  // Checking if buttons inside tasks section is clicked=
  if ( clickArea1 === 'tasks' || clickArea2 === 'tasks' || clickArea3 === 'tasks' ) {
    if (tag === 'svg') {
      if (basevalue  === 'delete' || basevalue  === 'can' || basevalue  === 'cap' || basevalue  === 'bin') {
        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      } else if ( basevalue === 'fav') {
        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;
        favsSection.style.display = '';
        favs.appendChild(li);
        favTitle.textContent = "Favorites";
      }

      if ( taskItems.length === 0 ) {
        tasksSection.style.display = "none";
      };

    } else if (tag === 'path') {
      if (basevalue  === 'delete' || basevalue  === 'can' || basevalue  === 'cap' || basevalue  === 'bin') {
        let li = event.target.parentNode.parentNode.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      } else if ( basevalue === 'favPath') {
        let li = event.target.parentNode.parentNode.parentNode;
        let ul = li.parentNode;
        favsSection.style.display = '';
        favs.appendChild(li);
        favTitle.textContent = "Favorites";
      }

      if ( taskItems.length === 0 ) {
        tasksSection.style.display = "none";
      };
    }

    // Checking if buttons inside favs section is clicked
  } else if ( clickArea1 === 'favs' || clickArea2 === 'favs' || clickArea3 === 'favs' ) {
    if (tag === 'svg') {
      if (basevalue  === 'delete' || basevalue  === 'can' || basevalue  === 'cap' || basevalue  === 'bin') {
        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      } else if ( basevalue === 'fav') {
        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;
        tasksSection.style.display = '';
        tasks.appendChild(li);
        tasksTitle.textContent = "Inbox";
      }

      if ( favsItems.length === 0 ) {
        favsSection.style.display = 'none';
      };

    } else if (tag === 'path') {
      if (basevalue  === 'delete' || basevalue  === 'can' || basevalue  === 'cap' || basevalue  === 'bin') {
        let li = event.target.parentNode.parentNode.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      } else if ( basevalue === 'favPath') {
        let li = event.target.parentNode.parentNode.parentNode;
        let ul = li.parentNode;
        tasksSection.style.display = '';
        tasks.appendChild(li);
        tasksTitle.textContent = "Inbox";
      }

      if ( favsItems.length === 0 ) {
        favsSection.style.display = 'none';
      };
    }
  }
});


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
