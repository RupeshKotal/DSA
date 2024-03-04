//Given N element rotate arry from last to first by K times

/* let arry = [1,2,3,4,5,6,7,8,9,10]

function reverse(arr){

    let sp = 0;
    let ep = arr.length - 1

    while(sp<ep){
        let temp = arr[sp];
        arr[sp] = arr[ep]
        arr[ep] = temp;
        sp++;
        ep--;
    }
    // console.log(arr);


    let ksp =0
    let k =4;
    while(ksp<k){
        let val = arr[ksp]
        arr[ksp] = arr[k]
        arr[k] = val
        ksp++
        k--
    }
console.log(arr);

let vk =5
let kep = arr.length -1;
    while(vk<kep){
      let value = arr[vk]
      arr[vk] = arr[kep]
      arr[kep] = value
      kep--
      vk++
    }

    console.log(arr);
}

reverse(arry) */

/*
let arry = [1,2,3,4,5,6,7,8,9]
let k=3

function revrse(arr,sp,ep){

while(sp<ep){
    let temp = arr[sp];
    arr[sp] = arr[ep];
    arr[ep] = temp
    sp++;
    ep--;
}
}

revrse(arry,0,arry.length-1)
revrse(arry,k,arry.length-1)
revrse(arry,0,k-1)


console.log(arry);

*/

let arry = [1,2,3,4,5,6,7,8]
let k=3
// console.log(arry);

function firstnumRev(arr,sp,ep){

    while(sp<ep){
        let temp = arr[sp]
    arr[sp] =arr[ep];
    arr[ep] = temp;

    sp++;
    ep--;

    }
}

firstnumRev(arry,0,arry.length-1)
firstnumRev(arry,0,arry.length-k-1)
firstnumRev(arry,arry.length-k,arry.length-1)

console.log(arry);