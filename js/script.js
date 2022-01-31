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
		
	}
}

function isOperator(operator)
{
	return operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%";
}

function reverseSign(sign)
{
	if (sign == "+")
		return "-";
	else
		return "+";
}

function addSign(operand, sign)
{
	if (sign == "+")
	{
		if (operand[0] >= '0' && operand[0] <= '9')
			return operand;
		else
			return String(Number(operand) * -1);
	}
	else
	{
		if (operand[0] >= '0' && operand[0] <= '9')
			return String(Number(operand) * -1);
		else
			return operand;
	}
}

function main()
{
	let operand1         = "0";
	let sign1            = "+";
	let operand2         = "";
	let sign2            = "+";
	let operator         = "";
	let error            = "";
	let buttons  		 = document.getElementsByClassName('button');
	let result           = "";

	const result_section = document.getElementById('result');
	buttons              = [...buttons];

	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
			button_pressed = button.innerHTML;

			if (button_pressed >= '0' && button_pressed <= '9')
			{
				
				if (operator == "")
				{
					if (operand1 == "0")
					{
						result_section.firstElementChild.innerHTML = button_pressed;
						operand1 = button_pressed;
					}
					else
					{
						result_section.firstElementChild.innerHTML += button_pressed;
						operand1 += button_pressed;
					}
				}
				else 
				{
					if (operand2)
					{
						result_section.firstElementChild.innerHTML += button_pressed;
						operand2 += button_pressed;
					}
					else
					{
						result_section.firstElementChild.innerHTML = button_pressed;
						operand2 += button_pressed;
					}
				}
			}
			else if (button_pressed == '.')
			{
				if (result_section.firstElementChild.innerHTML.indexOf(".") == -1)
				{
					if (operand2)
							operand2 += button_pressed;
						else
							operand1 += button_pressed;

						result_section.firstElementChild.innerHTML += button_pressed;
				}
			}
			else if (button_pressed == "AC")
			{
				operand1 				 = "0";
				operand2                 = "" ;
				sign1                    = "+";
				operator                 = "" ;
				sign2                    = "+";
				result_section.firstElementChild.innerHTML = "0";
			}
			else if (button_pressed == "+/-")
			{
				if (operand2)
				{
					sign2 = reverseSign(sign2);
					operand2 = addSign(operand2, sign2);
					result_section.firstElementChild.innerHTML = operand2;
				}
				else
				{
					sign1 = reverseSign(sign1);
					operand1 = addSign(operand1, sign1);
					result_section.firstElementChild.innerHTML = operand1;
				}
			}
			else if (isOperator(button_pressed))
			{
				operator = button_pressed;
				operand2 = "";
			}
			else if (button_pressed == "=")
			{
				if (operand1 && operator && operand2)
				{
					result = computeOperation(operand1, operand2, operator);

					if (result < 0)
						sign1 = "-";
					else
						sign1 = "+";

					result = String(result);
					operand1 = result;


					result_section.firstElementChild.innerHTML = result;
				}
			}
		});
	});
}


main();