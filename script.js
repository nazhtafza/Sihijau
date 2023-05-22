var counterInput = document.getElementById("counter-input");
var minusButton = document.getElementById("minus");
var plusButton = document.getElementById("plus");
var deleteIcon = document.getElementById("delete-icon");
var totalElement = document.getElementById("total");
var totalBill = document.getElementById("bill");

minusButton.addEventListener("click", updateTotal);
plusButton.addEventListener("click", updateTotal);

counterInput.value = 1;
var price = 65000;

function updateTotal() {
    var quantity = parseInt(counterInput.value) + 1;
    var total = quantity * 65000;

    var billTotal = 27000 + 1000 + total;;
    var formattedNumber = total.toLocaleString("en-US");
    var billformated = billTotal.toLocaleString("en-US");
    totalElement.textContent = "Rp " + formattedNumber;
    totalBill.textContent = "Rp " + billformated;

}

minusButton.addEventListener("click", function () {
    var currentValue = parseInt(counterInput.value);
    if (currentValue > 0) {
        counterInput.value = currentValue - 1;
    }
});

plusButton.addEventListener("click", function () {
    var currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
});

deleteIcon.addEventListener("click", function () {
    counterInput.value = "0";
});