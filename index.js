let counterHomeEl = document.getElementById("counter-home");
let counterGuestEl = document.getElementById("counter-guest");
let counterHome = Number(counterHomeEl.textContent);
let counterGuest = Number(counterGuestEl.textContent);

function incrementHome(amount) {
    counterHome += amount;
    console.log(counterHome);
    counterHomeEl.textContent = counterHome;
}

function incrementGuest(amount) {
    counterGuest += amount;
    counterGuestEl.textContent = counterGuest;
}