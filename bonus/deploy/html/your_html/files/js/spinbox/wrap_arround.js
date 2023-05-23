function wrap_around(ID) {
    var data = document.getElementById(ID);
    var min = parseInt(data.min),
        max = parseInt(data.max),
        value = parseInt(data.value);
    if (value == min) {
        document.getElementById(ID).value = max - 1;
    }
    if (value == max) {
        document.getElementById(ID).value = parseInt(min + 1);
    }
}
