const form = document.querySelector(".form");
const alert = document.querySelector(".alert");
const addItem = document.getElementById("add-item");
const mainBtn = document.querySelector(".main-btn");
const addedItems = document.querySelector(".added-items");
const addedItemsList = document.querySelector(".addeditem-list");
const clearBtn = document.querySelector("#clear-item")

//edits
let editElement;
editFlag = false;
let editID = "";


//Event Listeners

form.addEventListener('submit',addingItem)

clearBtn.addEventListener('click', clear)

//Functions

function addingItem(e){
    e.preventDefault();
    const value = addItem.value;
    const id = new Date().getTime().toString();
    // console.log(uid);

    if(value && !editFlag ){
//adding article
const article = document.createElement("article");
//adding class to the article
article.classList.add("single-item")

//add id
const attr = document.createAttribute("data-id");
attr.value = id;
article.setAttributeNode(attr);
article.innerHTML = `<p class="item-title">
${value}
</p>
<div class="btn-container">
<button class="edit-btn">
    edit
</button>
<button class="clear-btn">
    clear
</button>
</div>`
//Edit And Delete Functionality In Added items
const editBtn = article.querySelector(".edit-btn");
const deleteBtn = article.querySelector(".clear-btn");
const addedValue = article.querySelector("p")
// console.log(addedValue);
const text = addedValue.innerText;
console.log(text);

// deleteBtn.addEventListener('click',deleteItem);
deleteBtn.addEventListener('click',(e)=>{
    const element = e.currentTarget.parentElement.parentElement;
    
    const uid = element.dataset.uid;
    console.log(uid);
    
    addedItemsList.removeChild(element);
   if(addedItemsList.children.length === 0){
       addedItems.classList.remove("showadded-items");
   }
 
    displayAlert(`removed ${text}` , "safe");
    // remove from local storage
    removeFromLocalStorage(id);

});
editBtn.addEventListener('click',editItem);

//append Child
addedItemsList.appendChild(article);
//Display Alert
displayAlert("added item Sucessfully", "safe")
//show Added items
addedItems.classList.add("showadded-items");
//Add to Local Storage
addToLocalStorage(id,value);

//Set Back To Default
setBackToDefault();


    }else if(value  && editFlag ){
editElement.innerHTML = value;
displayAlert(`value changed` , "safe");
//edit Local Storage
editLocalStorage(editID,value);
setBackToDefault();
    }else{
    displayAlert("empty value" , "danger")
}
}
//Display Alert

function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add (`alert-${action}`)

//Remove Alert
setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove (`alert-${action}`)
}, 3000);
  
}
// function for setBackToDefault
function setBackToDefault() {
    addItem.value = "";
    editFlag = false;
    editID="";
    mainBtn.textContent = "Add Item"
}
//function for clear Items 
function clear(){
    const items = document.querySelectorAll(".single-item");

    if(items.length > 0){
        items.forEach((item) => {
        addedItemsList.removeChild (item)  ;
        });
      }    
        
  //removing the added-items div
        addedItems.classList.remove("showadded-items");
        //display alert
        displayAlert("cleard all items","danger");
        localStorage.removeItem("addedItemList");
}
//function for Delete Button
// function deleteItem(e){
//    const element = e.currentTarget.parentElement.parentElement;
//    const id = element.dataset.id;
//    console.log(id);
   
//    addedItemsList.removeChild(element);
// //remove clear btn
// if(addedItemsList.children.length === 0){
//     addedItems.classList.remove("showadded-items");
// }
//     //alert
//     displayAlert(`removed item` , "safe");
//     // remove from local storage
//     removeFromLocalStorage(id);
// }
//Function For Edit Button
function editItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   //set edit element
   editElement = e.currentTarget.parentElement.previousElementSibling;
   //set Form value
   addItem.value = editElement.innerHTML;
   editFlag=true;
   editID=element.dataset.uid;
   mainBtn.textContent = "Edit Item"
//    setBackToDefault();


    
}

///==== Local Storage ==== ///
//Add to Local Storage
function addToLocalStorage(id,value){
    const addedItems = {id:id,value:value}
    let storedItems =  getLocalStorage();
    storedItems.push(addedItems);
    localStorage.setItem('addedItemList', JSON.stringify(storedItems));
    
;}

//Remove From Local Storage
function removeFromLocalStorage(id){
     let storedItems = getLocalStorage();
     storedItems = storedItems.filter(function(item){
         if(item.id !== id){
             return item;
         }
         console.log(storedItems);
         
     })
     localStorage.setItem('addedItemList', JSON.stringify(storedItems));
}
//Edit local Storage

function editLocalStorage(id,value){
    let storedItems = getLocalStorage();
    storedItems = storedItems.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('addedItemList', JSON.stringify(storedItems));
}




function getLocalStorage(){
    return localStorage.getItem("addedItemList")? JSON.parse(localStorage.getItem('addedItemList')):[];
}