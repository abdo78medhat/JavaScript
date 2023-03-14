const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const mins = now.getMinutes()
    const hour = now.getHours()
    const secondsDeg = ((seconds / 60) * 360) + 90
    const minsDeg = ((mins / 60) * 360) + 90
    const hourDeg = ((hour / 12) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDeg}deg)` 
    minHand.style.transform = `rotate(${minsDeg}deg)` 
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}


setInterval(setDate, 1000)