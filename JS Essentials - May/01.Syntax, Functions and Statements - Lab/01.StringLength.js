function calculate(firstText, secondText, thirdText) {

    let sumLength = firstText.length + secondText.length + thirdText.length;
       
    let averageLength = Math.floor(sumLength / 3);
    
    console.log(sumLength);
    
    console.log(averageLength);    
    }

    calculate("chocolate", "ice cream", "cake")