let example = function(a,b, callB) {
    setTimeout( () => {
        let sum = a + b;
        let sub = a - b;
        callB(a+b, "complete" );
    }, 3000);
    

};

example(2,5, function(finalresult) {
    console.log(`\n result of : ${finalresult} \n`);
}
);