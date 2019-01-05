//chronomètre
var chrono = 5;
var sec = 0;
var min = 0;
var heu = 0;
var r = 0;
var b= false;
setInterval(function(){
	sec++;
	if(sec%60 === 0){
		sec=0;
		min++;
	}
	else if(min%60 === 0){
		min=0;
		heu++;
	}
	document.getElementById("s").innerHTML=('0' + sec).slice(-2);
	document.getElementById("m").innerHTML=('0' + min).slice(-2);
	document.getElementById("h").inerHTML=('0' + heu).slice(-2);
},1000);
//jeux code
function calcule(){
	var operateur = document.getElementById("op");
	operateur = operateur.options[operateur.selectedIndex].value;
	var res = parseInt(document.getElementsByName("resu")[0].value);
	var num1 = parseInt(document.getElementsByName("op1")[0].value);
	var num2 = parseInt(document.getElementsByName("op2")[0].value);
	var sccore=0;
	switch(operateur){
		case "plus":
			if(res === num1+num2){sccore++;}
			else{sccore--;}
			break;
		case "moins":
			if(res === num1-num2){sccore++;}
			else{sccore--;}
			break;
		case "multi":
			if(res === num1*num2){sccore+=10;}
			else{sccore-=20;}
			break;
		case "divi":
			if(res === num1/num2){sccore+=50;}
			else{sccore-=5;}
			break;
	}
	return sccore;
}
//compteur jeux
setInterval(function(){
	if(b){
		document.getElementById("chronometre").style.color = "#ff3333";
		if(chrono === 0){
			chrono=5;
			r--;
		}
		document.getElementById("chronometre").innerHTML=('0' + chrono).slice(-2);
		chrono--;
	}
},1000);
function generer(){
	var operateur = document.getElementById("niveau");
	operateur = operateur.options[operateur.selectedIndex].value;
	switch(operateur){
		case "1":
			document.getElementsByName("op1")[0].value = Math.floor(1+(Math.random()*10));
			document.getElementsByName("op2")[0].value = Math.floor(1+(Math.random()*10));
			break;
		case "2":
			document.getElementsByName("op1")[0].value = Math.floor(1+(Math.random()*50));
			document.getElementsByName("op2")[0].value = Math.floor(1+(Math.random()*50));
			break;
		case "3":
			document.getElementsByName("op1")[0].value = Math.floor(1+(Math.random()*100));
			document.getElementsByName("op2")[0].value = Math.floor(1+(Math.random()*100));
			break;
	}
}