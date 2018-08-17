var list = document.querySelector('ul'); // odnosi sie do sekcji <ul>
var input = document.querySelector('input'); // odnosi sie do sekcji <input type="text" name="item" id="item">
var button = document.querySelector('button'); // <button>

      button.onclick = function() {
var myItem = input.value;
        input.value = '';
          
var listItem = document.createElement('li');
var listText = document.createElement('span');
var listBtn = document.createElement('button');
var listBtn2 = document.createElement('button');
var listBtn3 = document.createElement('button'); 
var listBtn4 = document.createElement('button');
var listBtn5 = document.createElement('button');          

          
listItem.appendChild(listText);  // appendChild dodaje dotakowy węzeł do struktury na końcu 
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
listItem.appendChild(listBtn2);
listBtn2.textContent = 'Done';
listItem.appendChild(listBtn3);
listBtn3.textContent = 'Edit';          
       
list.appendChild(listItem);
          
listBtn.onclick = function(e) {
  list.removeChild(listItem);
}
listBtn2.onclick = function(e) {
  var done = ' Done ';
  listItem.removeChild(listBtn2);
   
    //var doneColor = done.fontcolor('green');    
  listText.textContent = myItem + done;
  // myItem.style.background = 'green';
   //listItem.removeChild(listBtn4);
   //listItem.removeChild(listBtn5);
   listItem.removeChild(listBtn3);
}
listBtn3.onclick = function() {   // EDIT

   
    
    
    var oldCnt = listText;
    listText.style.display = 'none';
    listBtn.style.display = 'none';
    listBtn2.style.display = 'none';
    
   
    var imput2 = document.createElement ('imput'); 
    imput2.setAttribute('type', 'text');
    listItem.appendChild(input2);
    //document.body.insertBefore(input2, listBtn4);
    
    
    listItem.removeChild(listBtn3);
    listItem.appendChild(listBtn4);
    listBtn4.textContent = 'Accept';    
    listItem.appendChild(listBtn5);
    listBtn5.textContent = 'Decline';   
    
    listBtn4.onclick = function() { //Accept
        
        //var newCnt = input.value;
        //input.value = '';
      
        //newCnt= 'TEST'; // !!!!!!!!!!!Korekta      
        
        //listText.textContent; //myItem.replace(newCnt,imput2); 
    }
    
    listBtn5.onclick = function() {  // Decline
        
        listText.textContent = myItem;         
    }
 
   
}
input.focus(); // przekierowanie na okno dodawania zadań
}