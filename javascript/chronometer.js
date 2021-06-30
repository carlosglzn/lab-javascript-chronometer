class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1

      if (callback) {
        callback()
      }

    }, 10)

  }

  getMinutes() {
    let minutesNoMilli = (this.currentTime - this.getMilliseconds()) / 100;
    let minutesNoSecs = minutesNoMilli - this.getSeconds();
    return minutesNoSecs / 60;
  }
  getSeconds() {
    let seconds = (this.currentTime - this.getMilliseconds()) / 100;
    let extraSeconds = seconds % 60;
    return extraSeconds;
  }
  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
   
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }

  }

  stop() {
    
    clearInterval(this.intervalId)

  }

  reset() {
  
    this.currentTime = 0

  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`

  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
