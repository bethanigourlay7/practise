let example = function(a,b, callB) {
 
    callB(a+b);

};

let sendf = (finalresult) => {
    console.log(`\n result: ${finalresult}`);
};

example(2,5, function(finalresult) {
    console.log(`\n result: ${finalresult} \n`);
}
);

