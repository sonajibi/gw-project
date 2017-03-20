// Main validation script
window.onload = function(){
	var stockForm = document.getElementById("stockForm");
	stockForm.onsubmit = function(e){
		var requiredInputs = document.querySelectorAll("input");
		for (var i=0; i < requiredInputs.length; i++){
			if(isBlank(requiredInputs[i]) ){ e.preventDefault();
				requiredInputs[i].style.borderColor="#AA0000";
			}
		}
		var requiredInputs = document.querySelectorAll("input");
		for (var i=0; i < requiredInputs.length; i++){
			requiredInputs[i].onfocus = function(){
				this.style.borderColor = "white";
			}
			var email = document.getElementById("email");
			if(! isValidEmail(email.value)){ e.preventDefault();
				email.style.borderColor="#AA0000";
			}
			var date = document.getElementById("date");
			if(! isValidDate(date.value)){ e.preventDefault();
				date.style.borderColor="#AA0000";
				document.getElementById('date-error').innerHTML = '<br/>Please enter a valid date';
			}
		}
	}
}

// Validation to check Email format
function isValidEmail(email){
	var dotPos = email.lastIndexOf(".");
	var atPos = email.lastIndexOf("@");
	if ( dotPos + 2 >= email.length ){
		return false;
	}
	if ( atPos + 2 > dotPos ){
		return false;
	}
	if( atPos < 1){
		return false;
	}
	return true;
}

function isValidDate(dateString)
{
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12) {
        return false;
    }

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    return day > 0 && day <= monthLength[month - 1];
};

// Define isBlank function to check if field is blank
function isBlank(inputField){
	if (inputField.value==""){
		return true;
	}
	return false;
}