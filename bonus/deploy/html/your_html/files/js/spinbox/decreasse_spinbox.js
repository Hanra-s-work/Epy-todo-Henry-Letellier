function decrease_spinbox(ID) {
    var spinbox = document.getElementById(ID);
    var min = spinbox.min,
        max = spinbox.max,
        value = parseInt(spinbox.value);
    if (value > min) {
        spinbox.value = value - 1;
    } else {
        spinbox.value = max;
    }
    document.getElementById(ID).value = spinbox.value;
}
