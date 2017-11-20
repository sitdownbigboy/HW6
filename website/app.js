var list = [ 
    { name: 'Peter Parker', likes: '700'},
    { name: 'Tony Stark', likes: '135'},
    { name: 'Wade Winston Wilson', likes: '403'},
    { name: 'Bruce Banner', likes: '218'},
    { name: 'Dina Prince', likes: '133'},
    { name: 'Clark Kent', likes: '122'},
    { name: 'Steven Grant Rogers', likes: '117'},
    { name: 'Dash', likes: '0'},
    { name: 'jjjjjjj', likes: '0'},
    { name: 'Michael Jordan', likes: '100000000'},
  ];


var listLength = list.length; 



var listNames = list.map(a => a.name); 



var listLikes = list.map(a => a.likes); 
  


function addition(r) {
    var b = r.parentNode.parentNode.cells[1].textContent; 
    var x =  parseInt(b) + 1; 
    r.parentNode.parentNode.cells[1].innerHTML = x;
    
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("List_of_candidates").deleteRow(i);
}




function createCandidate() {

    if(document.getElementById('Input').value == ''){
        alert('Please enter a valid character');
        return;
}

   
    var x = document.getElementById("List_of_candidates").rows.length;

    var table = document.getElementById("List_of_candidates");
    
    var row = table.insertRow(x); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3); 
    cell1.innerHTML = document.getElementById('Input').value;
    cell2.innerHTML = '<p id ="Number_Of_Likes"> 0 </p>';
    cell3.innerHTML = '<input type = "button" value ="Like" onclick = "addition(this)" />';
    cell4.innerHTML = '<input type = "button" value ="Delete" onclick = "deleteRow(this)" />';
    
    document.getElementById('Input').reset();
    

    
    
}