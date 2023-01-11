function brickCalculator(floor){
    var bricks = 0;
    if (floor<=10){
      bricks = floor * 15000;
    }
    else if(floor<=20){
      var first10Floors = 10 * 15000;
      var deduct = floor-10;
      var twentyFloors = deduct*12000;
      bricks = first10Floors+twentyFloors;
    }
    else{
      var first10Floors = 10 * 15000;
      var twentyFloors = 10 * 12000;
      var deduct = floor-20;
      var aboveTwenty = deduct*10000;
      bricks = first10Floors + twentyFloors + aboveTwenty;
    }
    return bricks;
    }
    var count = brickCalculator(35);
    console.log("Total number of brick required:" , count);