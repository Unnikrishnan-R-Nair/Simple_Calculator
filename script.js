function buttonClick(val){

    document.getElementById('screen').value+=val;
    
}

function clrButton(){
    document.getElementById("screen").value="";
    document.getElementById("screen1").value="";
    
}

function backButton(){
    let item = document.getElementById("screen").value;
    newString = item.slice(0, item.length-1)
    document.getElementById("screen").value = newString;
    
}

let newResult = 0;
function eqlClick(){
    var text=document.getElementById("screen").value;
    let result=eval(text);
    document.getElementById("screen1").value=result;
    document.getElementById("screen").value = ""
    newResult = result; 
    if (newResult > 0){
        buttonClick(newResult);
        document.getElementById("screen").value=newResult;
    }
    
}

if (newResult > 0){
    let res = newResult + buttonClick(newResult);
    document.getElementById("screen").value=newResult;
}





 