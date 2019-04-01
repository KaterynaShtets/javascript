'use strict'

class Device {
    constructor(power) {
        this._power = power;
        this._enabled = false
    }
    enable() {
        this._enabled = true;
    }
    disable() {
        this._enabled = false;
    }
    _powerValid(power) {
        if (typeof power === 'number') {
            this._power = power;
        }
    }
    set power(power) {
        this._powerValid(power)
    }
}