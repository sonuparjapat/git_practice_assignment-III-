function checkprime(num){

let factor=0;
for (i=1;i<=num;i++){if (num%i==0){
factor=factor+1;}}
if (factor==2){return true;}else {return false;}


}

let ans=checkprime(7);
if (ans==true){
      console.log("prime")
}else {
       console.log("Not Prime");
}