//Reverse a num

let num = 123456;

rev_num=0;

while(num>0){
    rev_num = rev_num * 10 +  parseInt(num%10);
    num = parseInt(num/10)
}


console.log(rev_num);
