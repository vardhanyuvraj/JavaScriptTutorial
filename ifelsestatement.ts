let age: number = 10;
if(age>18){
    console.log("YES");
}else{
    console.log("NO");
}

if(age>=0 && age<10){
    console.log("single");
}else if(age>=10 && age<100){
    console.log("two digit")
}
else if(age>=100){
    console.log("three digit");
}