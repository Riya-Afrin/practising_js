const oldContent = document.getElementById('box-1');
const newItem = document.createElement('p');
newItem.innerHTML = "This is the new item i want to add as a child to it's parent";
oldContent.appendChild(newItem);

// !element styling

newItem.style.backgroundColor='white';
newItem.style.fontFamily='poppins';
newItem.style.fontSize='25px';