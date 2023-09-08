Function.prototype.myThrottle = function(interval){
    let tooSoon = false
    return() => {
        if (!tooSoon){
            tooSoon = true
            setTimeout(()=> {tooSoon = false}, interval)
            this()
        }
    }
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
  }
  
  const neuron = new Neuron();
  // When you create a new Neuron,
  // you can call #fire as frequently as you want
  
  // The following code will try to #fire the neuron every 10ms. Try it in the console:
  const interval1 = setInterval(() => { //Changed from interval -> interval1
    neuron.fire();
  }, 10);
  
  // You can use clearInterval to stop the firing:
  clearInterval(interval1);
  
  // Using Function#myThrottle, you should be able to throttle
  // the #fire function of your neuron so that it can fire only
  // once every 500ms:
  
  neuron.fire = neuron.fire.myThrottle(1000);
  
  const interval = setInterval(() => {
    neuron.fire();
  }, 10);
  
  // This time, if your Function#myThrottle worked correctly,
  // the Neuron#fire function should only be able to execute
  // every 500ms, even though you're still trying to invoke it
  // every 10ms!
  
  // If you want this behavior for ALL neurons, you can do the same logic in the
  // constructor:
  
//   class Neuron {
//     constructor() {
//       this.fire = this.fire.myThrottle(500);
//     }
  
//     fire() {
//       console.log("Firing!");
//     }
//   }