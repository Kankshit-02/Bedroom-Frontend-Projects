
function addtolist(){
    const text=document.getElementById("text-field").value;
    var textdiv=document.createElement("div");
    textdiv.innerHTML=text;
    document.getElementById("list-container").appendChild(textdiv);

}