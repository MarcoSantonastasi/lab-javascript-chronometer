
// Create a Watch and decalre event handlers for the Watch
const watch = new Watch;

// Start/Stop Button
watch.btnLeft.addEventListener('click', () => {
    if (watch.btnLeft.classList.replace("start", "stop")) {
        watch.startClick();
        watch.btnLeft.innerText = "STOP";
        watch.btnRight.classList.replace("reset", "split");
        watch.btnRight.innerText = "SPLIT";
    }
    else if (btnLeft.classList.replace("stop", "start")) {
        watch.stopClick();
        watch.btnLeft.innerText = "START";
        watch.btnRight.classList.replace("split", "reset");
        watch.btnRight.innerText = "RESET";
    }

});

// Reset/Split Button
watch.btnRight.addEventListener('click', () => {
    if (watch.btnRight.classList.contains("reset")) {
        watch.resetClick();
    }
    if (watch.btnRight.classList.contains("split")) {
        watch.splitClick();
    }

});

// Start digits roll
watch.printTime();