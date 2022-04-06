function sum (n1, n2) {
    return n1 + n2;
}

function calc (n1, n2, callback){
    return callback(n1, n2);
}

console.log(calc (6 ,2, sum));

function date (callback){
    console.log(new Date); //first time - first date is printed
    setTimeout(function(){
        let date = new Date; //this is creating the second date logged
        callback(date)
        //creating a new date after 3 secs
        },3000)
}

function printDate(dateNow){
    console.log(dateNow, "ooh"); //second time date is printed
}
date(printDate);