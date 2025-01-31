
let numberDisplay = document.querySelector('.js-total');
let calculation =  '';

function calculator(number){
    if(number === 1){
        calculation += '1';
        
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 2){
        calculation += '2';
    
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 3){
        calculation += '3';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === '+'){
        calculation += ' + ';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 4){
        calculation +=  '4';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 5){
        calculation += '5';
        numberDisplay.innerHTML = calculation;
        

    }else if(number === 6){
        calculation += '6';
        numberDisplay.innerHTML = calculation;
        

    }else if(number === '-'){
        calculation += ' - ';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 7){
        calculation += '7';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 8){
        calculation += '8';
        numberDisplay.innerHTML = calculation;
        

    }else if(number === 9){
        calculation += '9';
        numberDisplay.innerHTML = calculation;
        

    }else if(number === '*'){
        calculation +=  '*';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 0){
        calculation +=  '0';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === '.'){
        calculation +=  '.';
        numberDisplay.innerHTML = calculation;
        

    }

    else if(number === '='){
        calculation = eval(calculation);
        numberDisplay.innerHTML = calculation; 

    }
    else if(number === '/'){
        calculation +=  '/';
        numberDisplay.innerHTML = calculation;
        

    }
    else if(number === 'clear'){
        calculation =  '';
        numberDisplay.innerHTML = calculation;
        

    }
    


    
    

}
