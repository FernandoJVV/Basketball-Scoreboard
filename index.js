//score variables
let homeScore = 0
let guestScore = 0
let h3HomeEl = document.getElementById("home-score")
let h3GuestEl = document.getElementById("guest-score")

//timer variables
let minutes = "00";
let seconds = "00";
let timerEl = document.getElementById("time")


function addHomeScore(event) {
    if (event.target.innerHTML == "+1") {
        //clicked on +1 
        homeScore += 1
        h3HomeEl.textContent = homeScore
    } else if (event.target.innerHTML == "+2") {
        //clicked on +2
        homeScore += 2
        h3HomeEl.textContent = homeScore
    } else {
        //clicked on +3
        homeScore += 3
        h3HomeEl.textContent = homeScore
    }
}

function addGuestScore(event) {
    if (event.target.innerHTML == "+1") {
        //clicked on +1 
        guestScore += 1
        h3GuestEl.textContent = guestScore
    } else if (event.target.innerHTML == "+2") {
        //clicked on +2
        guestScore += 2
        h3GuestEl.textContent = guestScore
    } else {
        //clicked on +3
        guestScore += 3
        h3GuestEl.textContent = guestScore
    }
}

function reset() {
    //reset scores
    homeScore = 0
    guestScore = 0
    h3GuestEl.textContent = guestScore
    h3HomeEl.textContent = homeScore

    //reset timer
    minutes = "00"
    seconds = "00"
    timerEl.textContent = `${minutes}:${seconds}`
}

function startTimer() {
    //call function chronometer every second
    setInterval(chronometer, 1000)
}

function chronometer() {
    //start adding seconds
    seconds++

    if (seconds < 10) {
        //seconds are less than 10 concatenate a zero before it
        seconds = "0" + seconds
    }

    if (seconds > 59) {
        //a minute has passed
        seconds = "00"
        minutes++
        if (minutes < 10) {
            //minutes are less than 10 concatenate a zero before it
            minutes = "0" + minutes
        }
    }

    //update text content of timer
    timerEl.textContent = `${minutes}:${seconds}`

}


