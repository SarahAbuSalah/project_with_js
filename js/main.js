var
Div = document.getElementById('DIV'),
myDiv = document.getElementById('div1'),
H3 = document.getElementById('p1'),
Button1 = document.getElementById('button1'),
Button2 = document.getElementById('button2'),
Button3 = document.getElementById('button3'),
Button4 = document.getElementById('button4'),
Button5 = document.getElementById('button5'),
Button6 = document.getElementById('button6'),
Input = document.getElementById('Input1').value,
I = document.getElementById('i1');


Button6.onclick = function(){
    myDiv.style.backgroundColor = Input1.value;
    H3.style.color = Input1.value;
}
Button1.onclick = function(){
    myDiv.style.backgroundColor = "red";
    H3.style.color = "red";
}
Button2.onclick = function(){
    myDiv.style.backgroundColor = "blue";
    H3.style.color = "blue";
}
Button3.onclick = function(){
    myDiv.style.backgroundColor = "green";
    H3.style.color = "green";
}
Button4.onclick = function(){
    myDiv.style.backgroundColor = "yellow";
    H3.style.color = "yellow";
}
Button5.onclick = function(){
    myDiv.style.backgroundColor = "black";
    H3.style.color = "black";
}
I.onclick = function(){
    myDiv.style.backgroundColor = "#fff";
    H3.style.color = "#fff";
}
I.ondblclick = function(){
    Div.style.display = "none";
}
