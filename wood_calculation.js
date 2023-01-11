function woodCalculator(chair,table,bed){
    var woodForChair = chair*1;
    var woodForTable = chair*3;
    var woodForBed = chair*5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
  }
  var result = woodCalculator(5,5,5);
  console.log("Total wood needed:" , result);