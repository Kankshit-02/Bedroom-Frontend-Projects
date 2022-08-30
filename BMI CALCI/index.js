
//document.getElementById("button").addEventListener("click", bmi);

function bmi(){
    let height=parseInt(document.getElementById("Height").value,10)
    let weight=parseInt(document.getElementById("Weight").value,10);
    var bmi=(weight)/(height/100)**2
    let bmibody = document.createElement("div")
    bmibody.innerHTML=bmi;
    document.getElementById("BMI").appendChild(bmibody)
}