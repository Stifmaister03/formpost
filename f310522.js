function cAll1() {
	document.getElementById('form').style.display = 'block';
}
function hideone() {
	document.getElementById('form').style.display = 'none';
}
function cAll4() {
	document.getElementById('formm').style.display = 'block';
}
function hideonee() {
	document.getElementById('formm').style.display = 'none';
}
	var height,weigh,bmi;
	function resultbmi() {
		
		weigh=document.getElementById('one').value;
		height=document.getElementById('two').value;
		bmi=(weigh/(height*height)).toFixed(2);
		document.getElementById('result').innerHTML = "Your BMI is "+bmi;
	}
	var base, height, area;
function resultriangle() {
		height=document.getElementById('onee').value;
		base=document.getElementById('twoo').value;
		area=((base*height)/2).toFixed(2);
		document.getElementById('resultt').innerHTML = "Your triangle's area is "+area;
}
	var name;
function cAll3() {
	name=prompt("What's your name?");
	alert("Bella ciao, "+name);
}

	var numone,numtwo,resulttt;
function multiply() {
		numone=document.getElementById('numone').value;
		numtwo=document.getElementById('numtwo').value;
		resulttt=(numone*numtwo).toFixed(2);
		document.getElementById('resulttt').innerHTML = "Your result is "+resulttt;
	}

var numone,numtwo,resulttt;
function add() {
		numone=document.getElementById('numone').value;
		numtwo=document.getElementById('numtwo').value;
		resulttt=(numone)+(numtwo).toFixed(2);
		document.getElementById('resulttt').innerHTML = "Your result is "+resulttt;
	}

var numone,numtwo,resulttt;
function subtract() {
		numone=document.getElementById('numone').value;
		numtwo=document.getElementById('numtwo').value;
		resulttt=(numone-numtwo).toFixed(2);
		document.getElementById('resulttt').innerHTML = "Your result is "+resulttt;
	}
 
