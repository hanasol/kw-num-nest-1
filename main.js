#!/usr/bin/env/ node
//shebang
const lib=require("./lib");
if(process.argv.length<=3){//인자로 숫자가 없는 경우
    console.log("Insufficient parameter!");
    process.exit(1);
}
let command=process.argv[2];

let numbers=process.argv.slice(3, process.argv.length).map((n)=>parseFloat(n));

if(numbers.some((n)=>isNaN(n))){//하나라도 NaN이면 전체가 true가 됨
    console.log("Some argumensts are not numbers!");
    process.exit(1);
}

let ans;
switch(command){
    case "avg":
        ans=lib.avg(numbers);
        break;
    case "prime":
        ans=numbers;
        if(lib.prime(numbers))
            console.log("This number is prime");
        else
            console.log("This number is not prime");
        break;
    case "factorial":
        ans=lib.factorial(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
console.log(ans);