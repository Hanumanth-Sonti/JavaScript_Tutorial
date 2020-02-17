function testLogicalAnd(val){
  if( val >= 50 && val <=100 ){
    return "And val: "+val+" is inside";
  }
  return "And val: "+val+" is outside";
}

console.log(testLogicalAnd(55));
console.log(testLogicalAnd(101));
console.log(testLogicalOr(22));
console.log(testLogicalOr(30));
console.log(testLogicalOr(78));

function testLogicalOr(val){
  if( val < 25 || val <50 ){
    return "OR val: "+val+" is inside";
  }
  return "OR val: "+val+" is outside";
}
