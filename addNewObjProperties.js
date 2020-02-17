//Built in Objects retrieve data using properties unlike indexing
var ourDog = {
   "name"   : "Camper",
   "legs"   : 4,
   "tails"  : 1,
   "friends": ["everything"]
 };
ourDog.bark = "bow bow";
 var myDog = {
   "name"   : "Quincy",
   "legs"   : 3,
   "tails"  : 1,
   "friends": []
 };
 myDog['bark'] = "bow wow";
 console.log(ourDog);
  console.log(myDog);
