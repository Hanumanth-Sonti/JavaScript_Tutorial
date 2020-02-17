var count = 0;
console.log(cc(2));
console.log(cc(3));
console.log(cc(6));
console.log(cc("N"));
console.log(cc("10"));
console.log(cc("J"));
console.log(cc("Q"));

function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case "10":
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    default:
       count=0;
       break;
  }
  var holdbet = "Hold";
  if(count > 0){
    holdbet = 'Bet';
  }
  return count + " "+ holdbet;
}

/*console.log(caseSwitch(1));
console.log(caseSwitch(2));
console.log(caseSwitch(3));
console.log(caseSwitch(4));
console.log(caseSwitch(5));*/

function caseSwitch(val){
  var answer = "";
  switch(val){
    case 1:
       answer = "alpha";
       break;
    case 2:
       answer = "beta";
       break;
    case 3:
    case 4:
      answer = "gamma";
      break;
    default:
       answer = "no answer";
       break;
   }
   return answer;
}
