//store array
var myArray = ["Quincy",10];
console.log(myArray);

//Nested Array
var ourArray = [["the universe",42],["everything",101010]];
var myArray = [["Bulls",23],["White Sox",45]];
console.log(myArray[1]);

//return array value with index
var myArray = [50,60,70];
console.log(myArray[1]);

//Setup
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray[3][0][2];
console.log(myData);

//using push - add element to end of array
var myArray = ["Stimpson","J","cat"];
myArray.push(["happy","joy"]);
console.log(myArray);
console.log(myArray[3][1]);

var strArray = [["John",23],["cat",2],["dog",3]];
strArray.push(["bull",4]);
console.log(strArray[2][0]);

//var myArray = [["Bulls",23],["White Sox",45]];
//console.log(myArray[1][0]);

//using pop - remove element from end of the array
var ourArray = [1,2,3]
//ourArray.pop(ourArray[2]);
ourArray.pop(1);
console.log(ourArray);

var myArray = [["John",34],["cat",4],["dog",5]];
console.log(myArray.pop());
console.log(myArray);

//shift - similar to pop but removes the first element in the array
//instead of the last item
var myArray = ["Simpson","J","cat",["dog",4]];
var removeFromArray = myArray.shift();
console.log(removeFromArray);
console.log(myArray);

//unshift - adds element to the beginning of the array
var ourArray = [["Sam",12],["Harr",34]];
console.log(ourArray.shift()); //remove first element
console.log(ourArray.unshift("Happy")); //add element to first
console.log(ourArray);
