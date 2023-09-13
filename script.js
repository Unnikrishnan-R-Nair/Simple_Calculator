function buttonClick(val){

    document.getElementById('screen').value+=val

}
function clrButton(){
    document.getElementById("screen").value=""
}
function eqlClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}








 