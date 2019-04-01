'use strict'
class Fridge extends Device {
    constructor(power, temperature) {
        super(power)
        this._food = [];
        this._temperature = temperature
    }
    addFood() {
        for (let i = 0; i < arguments.length; i++) {
            this._food.push(arguments[i])
        }
        if (!this._enabled) {
            throw new Error("Холодильник выключен");
        }
        if (this._food.length + arguments.length > this._power / 100) {
            throw new Error("Нельзя добавить, не хватает мощности");
        }
    }
    get food() {
        let res = 'В холодильнике: ' + this._food
        return res;
    }
    set temperature(temperature) {
        if (temperature > 10) {

            this._enabled = false;

        }
        if (typeof temperature === 'number' && temperature > -20 && temperature < 0) {
            this._temperature = temperature
        }

    }
    get temperature() {
        return this._temperature
    }
}
//   var fridge = new Fridge(500,-2);

//      fridge.power=1000;

//      fridge.enable();
//      console.log(fridge.temperature);
//      fridge.temperature=-5;
//      console.log(fridge.temperature)
//      //fridge.temperature=20;-режим разморозки

//      fridge.addFood("котлета");
//      fridge.addFood("сок", "варенье");
//      fridge.addFood("торт");
//      fridge.disable()
//      alert(fridge.food);