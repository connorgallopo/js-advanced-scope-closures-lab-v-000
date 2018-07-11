function produceDrivingRange(blockRange){
  return function(block1, block2){
    const distance = Math.abs(parseInt(block1) - parseInt(block2));
    if (distance < blockRange){
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    }
  };
};

function produceTipCalculator(percentage){
  return function(fare){
    return percentage * fare;
  };
};

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    };
  };
};
