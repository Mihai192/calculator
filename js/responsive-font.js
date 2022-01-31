function numberOfDigitsRemainingToFit(text, result_section)
{
    let sectionWidth = result_section.clientWidth;
    let numberOfDigits = text.innerHTML.length;
    let digitWidth = text.clientWidth / numberOfDigits;

    digitToFit = Math.floor(result_section.clientWidth / digitWidth);

    return digitToFit - numberOfDigits;
}

function currentNumberOfDigits(text)
{
    let numberOfDigits = text.innerHTML.length;
    return numberOfDigits;
}

function main()
{  
    const result_section = document.getElementById('result');
    const text = result_section.firstElementChild;
    let   value = 100;
    let initialValue = Number(text.style.fontSize);
    let   digitWidth;
    let   digitAbleToFit;

    setInterval(function(){
        digitAbleToFit = numberOfDigitsRemainingToFit(text, result_section);
        
        
        if (digitAbleToFit < 0)
        {
            value = 0.8 * value;
            text.style.fontSize = String(value) + "%";
        }
        
        else if (text.innerHTML.length == 1)   
        {
            text.style.fontSize = String(100) + "%";
            value = 100;
        }
        
        
    }, 500);

}


main();