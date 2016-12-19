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
function Qclicked() {
var input_val = document.getElementsByClassName('Q1'); //input_val is now an array of the values from Question 1
var input_valQ3 = document.getElementsByClassName('Q3'); 
	for (var i=0; i < input_val.length; ++i) {
		if(input_val[i].checked) {
			var val_int = parseInt(input_val[i].value);
			counter += val_int;
			console.log(counter);
		}
		 	if (input_valQ3.item(i).checked==true) {
			var val_int1 = parseInt(input_valQ3[i].value);
			counter += val_int1;
		}
		else {continue;}

	}
}
function Q2clicked() {
var input_val = document.getElementById('Q2').value; 
var val_int = parseInt(input_val);	
	for (var i=0; i < 4; ++i) {
		if(i == val_int) {
			counter += i;
			break;
		}
	}
}
function Q4clicked(clicked_id) {
	var value = parseInt(clicked_id);
	counter += value;

}
function finalSubmit() {
	Q2clicked();
	Qclicked(); 

	var input_val = document.getElementById('answer5').value; 
	var val_int = parseInt(input_val);	
	counter += val_int;

	if (counter <=5) {
		alert("You are completely sane");
	}
	else if(counter > 5 && counter <=10) {
		alert("You got some quirks, but nothin' to stress about");
	}
	else if(counter > 10 && counter <=15) {
		alert("May want to see somebody...");
	}
	else {
		alert("Please put on this nice, fluffy, white jacket, and come with me...");
	}
}

