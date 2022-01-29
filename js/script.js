

function computeOperation(operand1, operand2, operator)
{
	switch(operator) 
	{
  		case "+":
    		return Number(operand1) + Number(operand2);
		case "-":
		    return Number(operand1) - Number(operand2); 
		case "*":
			return Number(operand1) * Number(operand2);
		case "/":
			return Number(operand1) / Number(operand2);
		case "%":
			return Number(operand1) / 100 * Number(operand2);
		default:
		    return "Error";
	}
}


function isOperator(operator)
{
	return operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%";
}

function main()
{
	let operand1 = "";
	let sign1    = "";
	let operand2 = "";
	let sign2    = "";
	let operator = "";
	let error    = "";
	let buttons  = document.getElementsByClassName('button');
	
	const result_section = document.getElementById('result');

	buttons = [...buttons];

	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
			button_pressed = button.innerHTML;

			if (button_pressed >= '0' && button_pressed <= '9' || button_pressed == ".")
			{

			}
			else if (button_pressed == "AC")
			{
				
			}
			else if (button_pressed == "+/-")
			{

			}
			else if (isOperator(button_pressed))
			{
				
			}
			else if (button_pressed == "=")
			{
				
				

			}

		});
	});
}


main();