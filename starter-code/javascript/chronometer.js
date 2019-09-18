class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = undefined;
  }
  startClick(interval) {  
    this.setIntervalId = setInterval(() => this.currentTime++, interval);
  }
  getMinutes() {
    return parseInt(this.currentTime/60).toString();
  }
  getSeconds() {
    return parseInt(this.currentTime%60).toString();
  }
  twoDigitsNumber(numberString) {
    if (numberString.length < 2) return "0" + numberString; 
  }
  stopClick() {}
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}