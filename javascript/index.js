const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  
  printMinutes()
  printSeconds()
  printMilliseconds()
  
}

function printMinutes() {
  
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]

}

function printSeconds() {

  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]

}

// ==> BONUS
function printMilliseconds() {

  let miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  milDecElement.innerText = miliseconds[0]
  milUniElement.innerText = miliseconds[1]

}

function printSplit() {
  
  let li = document.createElement("li")
  li.innerText = chronometer.split()
  splitsElement.appendChild(li)


}

function clearSplits() {
  
  splitsElement.innerHTML = ""
  
}

function setStopBtn() {
  
  btnLeftElement.innerText = "STOP"
  btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
  
  btnRightElement.innerText = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  
  btnLeftElement.innerText = "START"
  btnLeftElement.className = "btn start"
}

function setResetBtn() {
  
  btnRightElement.innerText = "RESET"
  btnRightElement.className = "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.contains("start")) {
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnRightElement.classList.contains("reset")) {
    clearSplits()
    chronometer.reset()
    printTime()
  } else {
    printSplit()
  }

});


