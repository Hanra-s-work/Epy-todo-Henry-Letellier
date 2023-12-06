function decrease_spinbox(ID) {
    var spinbox = document.getElementById(ID);
    var min = spinbox.min,
        value = parseInt(spinbox.value);
    if (value > min) {
        spinbox.value = value - 1;
    }
    document.getElementById(ID).value = spinbox.value;
}
