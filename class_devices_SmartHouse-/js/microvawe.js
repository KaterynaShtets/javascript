class Microwave extends Device {
  constructor(power) {
    super(power);
    this._timerId;
  }
  _onReady() {
    var text2 = 'еда нагрета'
    return text2
  }
  set timeToCook(time) {
    this._time = time
  }
  get timeToCook() {
    return this._time;
  }
  run() {
    if (!this._enabled) {
      throw new Error("Микроволновка выключена");
    }
    this._timerId = setTimeout(Microwave.prototype._onReady.call(self), 3000);
  }
  disable() {
    super.disable()
    clearTimeout(this._timerId);
    var text3 = 'Микроволновка остановлена'
    return text3;
  }
}
//   let microwave = new Microwave(300);
//      microwave.enable();
//      microwave.run();
//microwave.disable();