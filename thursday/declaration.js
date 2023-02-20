//console.log(" \n test \n");

function myDisplay (some){
    console.log(`\n >>> ${some}`)
}

function myCal(num1, num2){

    let sum = num1 + num2; 
    return sum; 
}



myDisplay(` result ${res} \n`);

let res = myCal(2,5);
myDisplay(` result ${res}\n`);

let my2call = myCal;

let display2 = myCal(3,7);

myDisplay( `result 2 ${display2}`);

// go to 1:20:00

