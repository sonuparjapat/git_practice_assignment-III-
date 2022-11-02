function checkprime(num){
let count=0;
for (i=1;i<=num;i++){if (num%i==0){
count=count+1;}}
if (count==2){return true;}else {return false;}
}
let ans=checkprime(7);
if (ans==true){console.log("Not prime")}
else {console.log("Prime");}