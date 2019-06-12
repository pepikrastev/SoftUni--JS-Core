function solve(fundamentals , advanced , applications , educationForm){

    let price = 0;

    if (fundamentals) {
        price += 170;
    }
    if (advanced) {
        price += 180
    }
     if (applications) {
        price += 190
    }

    if (fundamentals && advanced) {
        price -= 180 * 0.10;
    }
    if (fundamentals && advanced && applications) {
        price -= price * 0.06;
    } 
    

    if (educationForm === "online") {
        price -= price * 0.06;
    }

    console.log(price.toFixed(0))
}

 solve([true,true,false,"onsite"])