class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);

    // this.intervalId = setInterval(() => {
    //   printTimeCallback && printTimeCallback();
    //   this.currentTime++;
    // }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let count = this.currentTime / 60;
    let minuteCount = Math.floor(count);

    return minuteCount;
  }

  getSeconds() {
    // ... your code goes here

    let getSecond = this.currentTime % 60;
    return getSecond;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // let findValue;
    if (value < 10 || value === 0) {
      return String("0" + value);
    } else {
      return String(value);
    }
    // return findValue;
  }

  stop() {
    // ... your code goes here
    // this.intervalId = setInterval(() => {});
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
