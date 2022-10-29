let a = 123456789;
var b;
let s = " ";
let sf = " ";

while(a>0){
	 
    i = a %10;
	switch(i){
        case 0:
            s = "zero";
            break;
        case 1:
            s = "one";
            break;
        case 2:
            s = "two";
            break;
        case 3:
            s = "three";  
            break;
        case 4:
            s = "four";
            break;
        case 5:
            s = "five";
            break;
        case 6:
            s = "six";
            break;
        case 7:
            s = "seven";
            break;
        case 8:
            s = "eight";
            break;
        case 9:
            s = "nine";     
            break;                 
    }
    //concatenate the string, adding the new string the to last one.
    sf = s + " " + sf;
	a =  parseInt(a / 10);
	
}

console.log(sf);