function addition(){
    num1=parseInt(document.getElementById('num1').value,10);
    num2=parseInt(document.getElementById('num2').value,10);

    let result = num1 + num2;
    document.getElementById('result').innerText=result
}

function subtraction(){
    num1=parseInt(document.getElementById('num1').value,10);
    num2=parseInt(document.getElementById('num2').value,10);

    let result = num1 - num2;
    document.getElementById('result').innerText=result
}

function multiplication(){
    num1=parseInt(document.getElementById('num1').value,10);
    num2=parseInt(document.getElementById('num2').value,10);

    let result = num1 * num2;
    document.getElementById('result').innerText=result
}

function division(){
    num1=parseInt(document.getElementById('num1').value,10);
    num2=parseInt(document.getElementById('num2').value,10);

    let result = num1 / num2;
    document.getElementById('result').innerText=result
}