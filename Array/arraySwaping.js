
let arr =[1,2,3,4,5,6,7]
   
function rev(arr){
 let n = arr.length
   let sp = 0;
 let ep = n-1;
//  console.log(ep);

while(sp<=ep){
 let temp = arr[sp];
  arr[sp] = arr[ep];
  arr[ep]=temp
  sp++;
  ep--;
}

console.log(arr)

}

rev(arr)
