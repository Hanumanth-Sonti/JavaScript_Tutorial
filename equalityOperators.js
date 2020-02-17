function testStrict(val){
  if(val === 7){
    return "Strict Equal";
  }else if(val == 7){
    return "Equal";
  }
  return "Not Equal";
}

function compareEquality(a,b){
  if(a === b){
    return "Equal";
  }
  return "Not Equal";
}

function testInequality(val){
  if(val != 99){
    return "inEquality";
  }
  return "not InEqual";
}

function testNoStrict(val){
  if(val !== 17){
    return "not strict";
  }
  return "strict";
}
//console.log(testStrict('7'));
//console.log(compareEquality(10,'10'));
console.log(testInequality(9));
/*console.log(testNoStrict('17'));
console.log(testNoStrict("17"));
console.log(testNoStrict("97"));*/
