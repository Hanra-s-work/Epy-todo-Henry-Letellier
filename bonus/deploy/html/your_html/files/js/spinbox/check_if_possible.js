function check_if_possible() {
    var min = 0,
        max = 0,
        n = 0;
    wrap_around("minimum");
    wrap_around("maximum");
    wrap_around("n");
    min = document.getElementById("minimum").value;
    max = document.getElementById("maximum").value;
    n = document.getElementById("n").value;
    if (min > max) {
        document.getElementById("minimum").value = max;
        document.getElementById("maximum").value = min;
    } else if (min === max) {
        if (min > 0) {
            document.getElementById("minimum").value = parseInt(min - 1);
        } else {
            document.getElementById("maximum").value = parseInt(max + 1);
        }
    }
    calculate_all();
}
