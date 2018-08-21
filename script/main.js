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
          
listBtn.onclick = function() {
  list.removeChild(listItem);
}
listBtn2.onclick = function() {
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

   
    listItem.removeChild(listText);    
    var oldCnt = myItem;
    //listText.style.display = 'none';
 
    //listBtn.style.display = 'none';
    listItem.removeChild(listBtn);
    //listBtn2.style.display = 'none';
    listItem.removeChild(listBtn2);
   
    var input2 = document.createElement ('input'); 
    input2.setAttribute('type', 'text');
    listItem.appendChild(input2);
    input2.focus();
    
    listItem.removeChild(listBtn3);
    listItem.appendChild(listBtn4);
    listBtn4.textContent = 'Accept';    
    listItem.appendChild(listBtn5);
    listBtn5.textContent = 'Decline';   
    
    
    listBtn4.onclick = function() { //Accept
      //  var myItem2 = document.querySelector('input');
        var myItem2 = input2.value;
        input2.value = '';
        
        var listText2 = document.createElement('span');
        listItem.appendChild(listText2);        
        listText2.textContent = myItem2;
        
        
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        listItem.appendChild(listBtn2);
        listBtn2.textContent = 'Done';
        listItem.appendChild(listBtn3);
        listBtn3.textContent = 'Edit'; 
        listItem.removeChild(listBtn4);
        listItem.removeChild(listBtn5);
        listItem.removeChild(input2);
        
        //var newCnt = input.value;
        //input.value = '';
      
        //newCnt= 'TEST'; // !!!!!!!!!!!Korekta      
        
        //listText.textContent; //myItem.replace(newCnt,imput2); 
    }
    
    listBtn5.onclick = function() {  // Decline
        
        var listText3 = document.createElement('span');
        listItem.appendChild(listText3);        
        listText3.textContent = oldCnt;
        
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        listItem.appendChild(listBtn2);
        listBtn2.textContent = 'Done';
        listItem.appendChild(listBtn3);
        listBtn3.textContent = 'Edit'; 
        listItem.removeChild(listBtn4);
        listItem.removeChild(listBtn5);
        listItem.removeChild(input2);
           
        
        
        
    }
 
   
}
input.focus(); // przekierowanie na okno dodawania zadań
}