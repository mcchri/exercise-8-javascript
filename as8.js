let count = 0;
let num = Number(prompt("Enter a number"));

while(num>0){
	count = count + 1;
	num = Math.floor(num / 10);
}

console.log(count);
//first and last digit
let num2 = 12345;
let num3 = num2;
while(num3>=9){
	num3 = Math.floor(num3 / 10);
}
console.log(num3);
console.log(num2%10);
//
let a = 123456789;
var b, sum =0;
while(a > 0)
    {
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }
while(sum>0){
	 
    i = sum %10;
	if(i==1){
		console.log("one");
	}else if(i==2){
		console.log("two");
	}else if(i==3){
		console.log("three");
	}else if(i==4){
		console.log("four");
	}else if(i==5){
		console.log("five");
	}else if(i==6){
		console.log("six");
	}else if(i==7){
		console.log("seven");
	}else if(i==8){
		console.log("eight");
	}else if(i==9){
		console.log("nine");
	}else if(i==0){
		console.log("zero");
	}
	sum =  Math.floor(sum / 10);
	
}

let nom1 = Number(prompt("Enter first number"));
let nom2 = Number(prompt("Enter second number"));

let Max = Math.max(nom1,nom2);
let min = Math.min(nom1,nom2);
let x = Max;

if(Max%min == 0){
console.log(Max)
}else{
	while(Max%min!=0){
		Max = Max + x;
		
	}
	console.log(Max);
}


