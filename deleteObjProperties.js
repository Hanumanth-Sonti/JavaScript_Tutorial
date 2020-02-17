//Built in Objects retrieve data using properties unlike indexing
var ourDog = {
   "name"   : "Camper",
   "legs"   : 4,
   "tails"  : 1,
   "friends": ["everything"],
   "bark"   : "bow-wow!"
 };
delete ourDog.bark;
 var myDog = {
   "name"   : "Quincy",
   "legs"   : 3,
   "tails"  : 1,
   "friends": [],
   "bark"   : "wow!"
 };
delete myDog.bark;
console.log(ourDog);
console.log(myDog);
