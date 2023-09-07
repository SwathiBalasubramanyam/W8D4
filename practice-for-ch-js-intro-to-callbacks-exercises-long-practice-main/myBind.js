Function.prototype.myBind = function(context){
    let temp_this = this;
    return function(){
        // console.log(this)
        // console.log(context)
        temp_this.apply(context)
    }
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  const turnOnFuncOne = () => turnOn.apply(lamp)
  const turnOnFuncTwo = function (){
    return turnOn.apply(lamp)
  }
  
  const boundTurnOn = turnOn.bind(lamp);
//   console.log("Before myBind")
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"

  turnOnFuncOne(); 
  turnOnFuncTwo(); 