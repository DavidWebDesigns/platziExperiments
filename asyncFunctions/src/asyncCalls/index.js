const doSomethingAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true) ?
        setTimeout (() => resolve ('Something async done!'), 2000)
        : reject (new Error ('Test Error'))
    });
}
const doSomethingElse = async () => {
    console.log('doing something else');
    const something = await doSomethingAsync(); //this will stop the callstak flow of this function until the await is resolved
    console.log('ready now');
    console.log(something);
}

const otherFunction = async () => {
    try {
        let otherSomething = await doSomethingAsync();
        console.log(otherSomething);
    } catch {
        console.error(error)
    }
}

console.log('Before');
doSomethingElse();
console.log('After');
console.log('once more');
otherFunction();
console.log('there it comes');
