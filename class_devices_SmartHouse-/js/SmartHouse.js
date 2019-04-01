  'use strict'
  class SmartHouse {
      constructor(owner) {
          this._owner = owner;
          this._devices = [];
      }
      set owner(owner) {
          if (typeof owner == 'string') {
              this._owner = owner
          }
      }
      get owner() {
          return this._owner
      }
      addDevices() {
          for (let i = 0; i < arguments.length; i++) {
              this._devices.push(arguments[i])
          }
      }
      get devices() {
          return this._devices
      }
  }