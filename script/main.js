var list = document.querySelector('ul'); // odnosi sie do sekcji <ul>
var input = document.querySelector('input'); // odnosi sie do sekcji <input type="text" name="item" id="item">
var button = document.querySelector('button'); // <button>

      button.onclick = function() {
var myItem = input.value;
        input.value = '';
          
var listItem = document.createElement('li');
var listText = document.createElement('span');
var listBtn = document.createElement('button'); //DELETE
var listBtn2 = document.createElement('button'); //DONE
var listBtn3 = document.createElement('button'); //EDIT
var listBtn4 = document.createElement('button'); //ACCEPT
var listBtn5 = document.createElement('button'); // DECLINE         

          
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
} //DELETE
listBtn2.onclick = function() {
    var done = ' Done ';
    listItem.removeChild(listBtn2);
    listText.textContent = myItem + done;
    listItem.removeChild(listBtn3);  
    //var doneColor = done.fontcolor('green');   
    // myItem.style.background = 'green';
    //listItem.removeChild(listBtn4);
    //listItem.removeChild(listBtn5);
   
} //DONE
listBtn3.onclick = function() {   
       
    /*listItem.removeChild(listText);
    listItem.removeChild(listBtn);
    listItem.removeChild(listBtn2);
    listItem.removeChild(listBtn3);*/
    listText.style.display = 'none';
    listBtn.style.display = 'none';
    listBtn2.style.display = 'none';  
    listBtn3.style.display = 'none';  
    
    var oldCnt = myItem;
    
    var input2 = document.createElement ('input'); 
    input2.setAttribute('type', 'text');
    listItem.appendChild(input2);
    input2.focus();
        
    
    listItem.appendChild(listBtn4);
    listBtn4.textContent = 'Accept';    
    listItem.appendChild(listBtn5);
    listBtn5.textContent = 'Decline';   
        
listBtn4.onclick = function() { //ACCEPT
    var myItem2 = document.querySelector('input');
    
    var myItem2 = input2.value;
    input2.value = '';
        
    var listText2 = document.createElement('span');
    //listItem.appendChild(listText2);     
    listItem.insertBefore(listText2,listBtn); // wstawianie el. przed var wstawionyElement =elementRodzic.insertBefore(nowyElement,danyElement)
    listText2.textContent = myItem2;
        
    listItem.removeChild(listBtn4);
    listItem.removeChild(listBtn5);
    listItem.removeChild(input2);
                
    /*listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    listItem.appendChild(listBtn2);
    listBtn2.textContent = 'Done';
    listItem.appendChild(listBtn3);
    listBtn3.textContent = 'Edit'; 
    listText.style.display = 'inline-block';*/
    listBtn.style.display = 'inline-block';
    listBtn2.style.display = 'inline-block'; 
    listBtn3.style.display = 'inline-block'; 
     
        //var newCnt = input.value;
        //input.value = '';
      
        //newCnt= 'TEST'; // !!!!!!!!!!!Korekta      
        
        //listText.textContent; //myItem.replace(newCnt,imput2); 
    }  //ACCEPT    
listBtn5.onclick = function() {  // DECLINE
        
    /*var listText3 = document.createElement('span');
    listItem.appendChild(listText3);        
    listText3.textContent = myItem;*/
        
    listItem.removeChild(listBtn4);
    listItem.removeChild(listBtn5);
    listItem.removeChild(input2);
        
   /*listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    listItem.appendChild(listBtn2);
    listBtn2.textContent = 'Done';
    listItem.appendChild(listBtn3);
    listBtn3.textContent = 'Edit'; */
    listText.style.display = 'inline-block';
    listBtn.style.display = 'inline-block';
    listBtn2.style.display = 'inline-block'; 
    listBtn3.style.display = 'inline-block'; 
    
             
    } // DECLINE 
   
} // EDIT
input.focus(); // przekierowanie na okno dodawania zadań
}