//To update the input field
function appendToDisplay(value)
{
    const display = document.getElementById('display');
    display.value += value;
}

// to clear the input field
function clearDisplay()
{
    const display = document.getElementById('display');
    display.value = '';
}

//To Calculate the values
function calculate()
{
    const display = document.getElementById('display');
    try
    {
      display.value = eval(display.value);
    }
    catch (error)
    {
      display.value = 'Error';
    }
}


//"Click" Event listener to button
const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>
    {
        button.addEventListener('click', () => {
        if (button.textContent === 'C')
        {
            clearDisplay();
        }
        else if (button.textContent === '=')
        {
            calculate();
        }
        else
        {
            appendToDisplay(button.textContent);
        }
    });
});