function increase_spinbox(ID) {
    var spinbox = document.getElementById(ID);
    var min = spinbox.min,
        max = spinbox.max,
        value = parseInt(spinbox.value);
    if (value < max) {
        spinbox.value = parseInt(value + 1);
    } else {
        spinbox.value = parseInt(min);
    }
    document.getElementById(ID).value = spinbox.value;
}
