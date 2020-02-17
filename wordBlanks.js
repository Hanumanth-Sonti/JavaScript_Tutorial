function wordBlanks(myNoun,myAdjective,myVerb,myAdVerb){
  var result ="";
  result += "The "+ myAdjective + " "+ myNoun + " "+ myVerb + " to the store " + myAdVerb;
  return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("cat","small","ran","quickly"));
