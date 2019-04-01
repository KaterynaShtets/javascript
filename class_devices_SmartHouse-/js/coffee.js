class CoffeeMachine extends Device{
    constructor(power,capacity){
      super(power)
      this._capacity=capacity;
      this._waterAmount=0;
      this._timerId;
      this.WATER_HEAT_CAPACITY = 4200
    }
    
    _waterAmountValid(amount){
      if (typeof amount === 'number' && amount > 0 && amount < this._capacity) {
             this._waterAmount = amount
         }
    }
    setWaterAmount(amount){
      if (amount < 0) {
             throw new Error("Значение должно быть положительным");
         }
         if (amount > this._capacity) {
             throw new Error("Нельзя залить больше, чем " + capacity);
         }
         this._waterAmountValid(amount)
    }
    getTimeToBoil(){
      return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
      console.log(  this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power)
    }
    disable(){
      super.disable();
      clearTimeout(this.timerId)
         alert('Кофеварка остановлена')
    }
    _onReady(){
      alert('Готов кофе: ' + this._waterAmount + 'мл');
         // Готов кофе: 150 мл
    }
    run(){
      if (!this._enabled) {
             throw new Error("Кофеварка выключена")
         }
         self = this;
         this._timerId = setTimeout(function () {
             CoffeeMachine.prototype._onReady.call(self)
         }, 2000)
    }
    addWater(amount){
     this.setWaterAmount(this._waterAmount + amount);
    }
  
  }
  var coffeeMachine = new CoffeeMachine(100000, 400);
     coffeeMachine.enable();
     coffeeMachine.setPower(1000)
     coffeeMachine.setWaterAmount(100);
     coffeeMachine.addWater(200);
     coffeeMachine.addWater(100);
     coffeeMachine.run();
  
     //coffeeMachine.disable();-остановит
     //coffeeMachine.addWater(300); // Нельзя залить больше..
  
  