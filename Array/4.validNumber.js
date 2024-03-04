//Given N arry elemnt count totoal no of elementg having atleast 1 element gretaer tha itself

let arr = [1, 2, 4, 9, 8, 6, 4, 3, 9,10,9,10,9,10];

let greterNum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  greterNum = arr[i];
}

for(let i=0;i<arr.length;i++){
    if(arr[i]==greterNum){
        count++
    }
}
console.log("Greatest no is :-" + greterNum);
console.log("No of count of greates no :- " + count);

console.log(`In current array valid numbers are ${arr.length - count}`);
