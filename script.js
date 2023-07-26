
function setDigitToNumber(digit, number) {
    clearDigit(digit)
    let segmentCode = numberToSegment.get(number.toString())
    for (let i = 0; i < segmentCode.length; i++) {
        let seg = `${digit.id}${segmentCode[i]}`
        let elem = document.getElementById(`${seg}`)
        elem.style.backgroundColor = "var(--segmentOnColor)"
        elem.style.boxShadow = "1px 1px 20px var(--segmentOnColor)"
        elem.style.zIndex = 1
        
    }  
}

function clearDigit(digit) {
    let codes = ["A", "B", "C", "D", "E", "F", "G"]
    for (let i = 0; i < 7; i++) {
        let seg = document.getElementById(`${digit.id}${codes[i]}`)
        seg.style.backgroundColor = "var(--segmentOffColor)"
        seg.style.boxShadow = ""
        seg.style.zIndex = -1
    }
}

function timeUpdate() {
    const date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    return [hour, minute, second]
}

function updateDigitalClock() {

    let currentTime = timeUpdate()
        
    let hoursDigits = [currentTime[0][0], currentTime[0][1]]
    let minutesDigits = [currentTime[1][0], currentTime[1][1]]
    let secondsDigits = [currentTime[2][0], currentTime[2][1]]

    for (let i = 0; i < 2; i++) {
        setDigitToNumber(clockDigits[i], hoursDigits[i])
        setDigitToNumber(clockDigits[i + 2], minutesDigits[i])
        setDigitToNumber(clockDigits[i + 4], secondsDigits[i])
    }
}

const segmentNumbers = [
    ["A", "B", "C", "D", "E", "F"],         // 0
    ["B", "C"],                             // 1
    ["A", "B", "G", "E", "D"],              // 2      
    ["A", "B", "G", "C", "D"],              // 3
    ["F", "G", "B", "C"],                   // 4
    ["A", "F", "G", "C", "D"],              // 5
    ["A", "F", "G", "E", "C", "D"],         // 6
    ["A", "B", "C"],                        // 7
    ["A", "B", "C", "D", "E", "F", "G"],    // 8
    ["A", "B", "C", "D", "F", "G"]          // 9
]

const numberToSegment = new Map()
for (let i = 0; i < 10; i++) {
    numberToSegment.set(`${i}`, segmentNumbers[i])
}

const digit1 = document.getElementById("digit1")
const digit2 = document.getElementById("digit2")
const digit3 = document.getElementById("digit3")
const digit4 = document.getElementById("digit4")
const digit5 = document.getElementById("digit5")
const digit6 = document.getElementById("digit6")
const separator = document.getElementsByClassName("dot")
var separatorState = 0

const clockDigits = [
    digit1, digit2, digit3, digit4, digit5, digit6
]


updateDigitalClock()
setInterval(updateDigitalClock, 1000);