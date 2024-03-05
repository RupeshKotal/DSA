let arry = [3,5,1,8,3]
let k =10

for(let i=1;i<=arry.length-2;i++){

    for(let j = i+1;j<=arry.length-1;j++){
        if(arry[i]+arry[j] == k){

            console.log(true);
        }
    }
}


