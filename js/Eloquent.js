//CHAPTER 2

//Fizzbuzz
var count = 0;
function numberCounter(){
	for (count = 0; count <= 100; count++){
		if (count % 5 == 0 && count % 3 == 0){
			console.log("FizzBuzz");
		}
		else if (count % 3 == 0){
			console.log("Fizz");
		}
		else if (count % 5 == 0){
			console.log("Buzz");
		}
		else {
			console.log(count);
		}
	}
}

numberCounter(count);

//Checkers

var size = 8;
var space = " ";
var hash = "#";
var output = " ";
var newline = "\n";

function checkers(){
	for (count = 0; count < (size * size); count++) {
		if (count % size == 0){
			output += newline;
		}
		else if (count % 2 == 0) {
			output += space;
			}
		else {
			output += hash;
		}
	}
	console.log(output);
}
checkers();

//CHAPTER 3

//minimum
var minimum = function(a,b) {
	var answer = Math.min(a,b);
	return answer
};

console.log(minimum(0,10));
console.log(minimum(2,11));
console.log(minimum(0,30));
console.log(minimum(8,-10));

//recursion

//recursion example
function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}

var result = factorial(8);
document.write(result);

// Output: 40320 

//recursion problem
// ************************Problem Corrected NEVER GIVE UP************************
function isEven(number){
	if(number%2===0){
		return true;
	} else if(number<0){
	    number = number * number;
		return isEven(number);
	} else {
		return false;
	}
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//Bean Counting
function countChar(str, cha){
    var count = 0
    var number = []
    
    function countChar2(str) {
    	for (var i=0; i<str.length; i++) {
	    	if (str.charAt(i) === cha){
	    	    number.push(i);
	    	}
	    	}
	    return number.length
		}
	answer = countChar2(str);
	return answer;
}

console.log(countChar("Because Bacon, shich CaboB", "a")); //3
console.log(countChar("kakkerlak", "k")); //4
console.log(countChar("knweflqjoeijfrejk;weuiflnewfin", "j")); //3
console.log(countChar("fnekwjnfkefnwejfnwkjfklemq", "q")); //1
console.log(countChar("tttttt", "t")); //6
console.log(countChar("emwflkm", "m")); //2
console.log(countChar("yturioewnkcvxmxdcokml", "x")); //2

//Chapter 4

//The sum of a range

var range_array= []
function range_function(start, end){
	for (start=start; start<=end; start++){
		range_array.push(start);
	}
	console.log(range_array);
}

var sum = 0
function sum_function(){
	for (var i in range_array){
		sum += range_array[i];
	}
	console.log(sum);
}

range_function(1, 10);
sum_function();

//The sum of range Bonus (You thought you couldn't complete this and you did, never give up)
var range_array= []
var range_array1= []
var range_array2= []
var total = 0;

function range_function(start, end, inc){
	if (inc>0 && inc!==undefined){ //for positive inc
		for (start=start; start<=end; start=start+inc){
		total = start;
		range_array1.push(total);
		}
	console.log(range_array1);
	} else if (inc<0){ //for negative inc
	    var def_neg = end * -1;
		for (start=start; start>=def_neg; start=start+inc){
		total = start;
		range_array2.push(total);
		}
	console.log(range_array2);
	} else {
		for (start=start; start<=end; start++){
		range_array.push(start);
		}
	console.log(range_array);
        }
}

range_function(1, 10);
range_function(1, 10, 2);
range_function(1, 10, -2);

//Reversing and Array
var n = [1, 2, 3, 4, 5]
var n2 = [];

function reverseArray(arg, arg2){

	var arr_length = arg.length;

	for (count=0; count<arr_length; count++){
		var rev_array = arg.pop();
		arg2.push(rev_array);		
	}
	console.log(n2);
}

reverseArray(n, n2);

//Part Two*
var n = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arg){
	for (i=0; i<Math.floor(n.length/2); i++){
	    var old = n[i];
	    n[i] = n[n.length - 1 - i];
	    n[n.length - 1 - i] = old;
	}
	console.log(arg);
}
reverseArrayInPlace(n);

//A List 
n = [1, 2, 3, 4, 5]

function arrayToList(arg){
    var list = null;
	for (i = n.length - 1; i>=0; i--){
	    list = {value: n[i], rest: list};
	}
	return list
	console.log(list)
}

arrayToList(n);

function listToArray(){
	for (var node = list; node; node = node.rest) {
		
	}
}

























