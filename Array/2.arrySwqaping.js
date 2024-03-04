let arry =[1,2,3,4,5,6,7,8,9,10]

function reverse(arr){
let sp = 3;
let ep = arr.length - 3;

while(sp<ep){
let temp = arr[sp]
arr[sp] = arr[ep]
arr[ep] = temp;

sp++;
ep--;
}

}


reverse(arry);

console.log(arry)