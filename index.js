document.addEventListener('DOMContentLoaded', function() {
    let counterHomeEl = document.getElementById("counter-home");
    let counterGuestEl = document.getElementById("counter-guest");
    let counterHome = Number(counterHomeEl.textContent);
    let counterGuest = Number(counterGuestEl.textContent);

    // Make these functions global so they can be accessed by onclick
    window.incrementHome = function(amount) {
        counterHome += amount;
        console.log(counterHome);
        counterHomeEl.textContent = counterHome;
    }

    window.incrementGuest = function(amount) {
        counterGuest += amount;
        counterGuestEl.textContent = counterGuest;
    }
});
