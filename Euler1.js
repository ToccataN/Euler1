var x =3;
var y =5;
var ans1=[];
var ans2=[];

for (var i=0;i<=333;i++){
ans1.push(x*i);
}
for (var i=0;i<200;i++){
ans2.push(y*i);
}
var sumAns2=0;
var sumAns1=0;
   
   for (var i=0;i<ans1.length;i++){
       var sum=sumAns1+0;
       sumAns1= sum+ans1[i];
    }
   for (var i=0;i<ans2.length;i++){
       
       var sum=sumAns2+0;
       sumAns2= sum+ans2[i];
   }

console.log(sumAns1+sumAns2);