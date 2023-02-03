let homeCountEl = document.getElementById("count-home")
let guestCountEl = document.getElementById("count-guest")

let countHome = 0
let countGuest = 0

function plus1() {
    countHome += 1
    homeCountEl.textContent = countHome
}

function plus2() {
    countHome += 2
    homeCountEl.textContent = countHome
}

function plus3() {
    countHome += 3
    homeCountEl.textContent = countHome
}

function plus1guest() {
    countGuest += 1
    guestCountEl.textContent = countGuest
}

function plus2guest() {
    countGuest += 2
    guestCountEl.textContent = countGuest
}

function plus3guest() {
    countGuest += 3
    guestCountEl.textContent = countGuest
}

function clearAll() {
    countGuest = 0
    countHome = 0
    guestCountEl.textContent = 0
    homeCountEl.textContent = 0
}