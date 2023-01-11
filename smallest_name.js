var smallName = ["Dia" , "Tony", "Mishailah", "Jack"];
var minimum = smallName[0];

for (var i=0; i<smallName.length; i++){
  var element = smallName[i];
  if(element<minimum){
    minimum=element;
  }
}
console.log("Smallest name :" , minimum);