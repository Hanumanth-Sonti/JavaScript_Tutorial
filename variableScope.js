/*var myGlobal =10;

function fun1(){
  var oopsGlobal = 5; //scoped to function and not visible outside
}

function fun2(){
  var output="";
  if(typeof myGlobal != "undefined"){
    output+= "myGlobal: "+myGlobal;
  }

  if(typeof oopsGlobal != "undefined"){
    output+= " oopsGlobal: "+ oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

//Local Scope
function myLocalScope(){
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();
//console.log(myVar);*/

var outerWear = "T-Shirt";

function myOutfit(){
  var outerWear = "Sweater"; //Local Varibale takes precedence over global variable
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);
