let example = function(a,b, callB) {
    console.log(`\n >> args passed ${a}, ${b}`);
    console.log(`\n >> ${callB}`);
    console.log(`\n >> run expression: ${a + b} \n`);
    callB();
    callB(4);
    callB(a +b);

setTimeout( () => {

    callB(a+b);

}, 2000 );

};

let sendf = (finalresult) => {
    console.log(`\n result: ${finalresult}`);
};

example(2,5,sendf);





