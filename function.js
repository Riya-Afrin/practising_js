/*
function count(num) {
    var divide = num / 5;
    return divide;
  }
  var result = count(50);
  console.log(result);
*/

//!getting the even number and multiplying it with 2.
function evenDouble(element) {
  if (element % 2 == 0){
    console.log(element*2 , 'is a even number')
  }
  else{
    console.log(element , 'is an odd number')
  }
}

num = [5, 8, 15, 48 , 2, 3];
for (let i = 0; i < num.length; i++) {
  const element = num[i];
  evenDouble(element);
}