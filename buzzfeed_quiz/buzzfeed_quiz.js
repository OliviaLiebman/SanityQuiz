var counter = 0;

function checkChecked(stayChecked) {
	var result=stayChecked.value;
    stayChecked.checked=true;
    for(var i = 1; i < 5; i++) {
        if(document.getElementById("check"+i).value!=result ) {
           	document.getElementById("check"+i).checked=false;
       	}
    }
}                    
function Q1clicked() {
var input_val = document.getElementsByClassName('Q1'); //input_val is now an array of the values from Question 1
	for (var i=0; input_val.length; ++i) {
		if(input_val[i].checked) {
			// counter = input_val[i].value;
			var val_int = parseInt(input_val[i].value);
			counter =+ val_int;
			console.log(counter);
			break;
		}
	}
}
function Q2clicked() {
var input_val = document.getElementById('Q2').value; 
var val_int = parseInt(input_val);	
	for (var i=0; i < 4; ++i) {
		if(i == val_int) {
			counter += i;
			console.log(counter);
			break;
		}
	}
}
function Q3clicked() {
var input_val = document.getElementsByClassName('Q3'); 
	for (var i=0; i < input_val.length; ++i) {
 		if (input_val.item(i).checked===true) {
			var val_int = parseInt(input_val[i].value);
			counter += val_int;
			console.log(counter);
			break;
		}
		else {continue;}
	}
}
function Q4clicked(clicked_id) {
	var value = parseInt(clicked_id);
	counter += value;
	console.log(counter);
}
function Q5clicked() {
	var input_val = document.getElementById('answer5').value; 
	var val_int = parseInt(input_val);	
	counter += val_int;
	console.log(counter);
}
function finalSubmit() {
	if (counter <=5) {
		document.getElementById("finalOutcome").innerHTML="You are completely sane";

		// document.write("You are completely sane");
	}
	else if(counter > 5 && counter <=10) {
		document.getElementById("finalOutcome").innerHTML="You got some quirks, but nothin' to stress about";
	}
	else if(counter > 10 && counter <=15) {
		document.getElementById("finalOutcome").innerHTML="May want to see somebody...";
	}
	else {
		document.getElementById("finalOutcome").innerHTML="Please put on this nice, fluffy, white jacket, and come with me...";
	}
}



