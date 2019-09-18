class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = undefined;
  }

  startClick() {  
    this.setIntervalId = setInterval(() => this.currentTime++, 1);
  }

  getMinutes() {
    return this.twoDigitsNumber(parseInt(this.currentTime/1000/60));
  }

  getSeconds() {
    return this.twoDigitsNumber(parseInt(this.currentTime/1000));
  }

  getMillisecs() {
    return this.twoDigitsNumber((this.currentTime));
  }

  twoDigitsNumber(number) {
    if (number.toString().length < 2) return "0" + number;
    else return "" + number;
  }
  
  stopClick() {
    clearInterval(this.intervalId)
  }
  
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {
    return this.currentTime;
  }
}