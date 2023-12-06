function increase_spinbox(ID) {
    var spinbox = document.getElementById(ID);
    var value = parseInt(spinbox.value);
    spinbox.value = parseInt(value + 1);
    document.getElementById(ID).value = spinbox.value;
}
