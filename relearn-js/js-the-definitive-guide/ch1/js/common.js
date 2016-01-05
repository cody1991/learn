'use strict';

function calculate() {
    var amount = document.getElementById('amount'),
        apr = document.getElementById('apr'),
        years = document.getElementById('years'),
        zipcode = document.getElementById('zipcode'),
        payment = document.getElementById('payment'),
        total = document.getElementById('total'),
        totalinterest = document.getElementById('totalinterest');

    var principal = parseFloat(amount.value),
        interest = parseFloat(apr.value) / 100 / 12,
        payments = parseFloat(years.value) * 12;

    var x = Math.pow(1 + interest, payments),
        monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

        save(amount.value, apr.value, years.value, zipcode.value);

        chart(principal, interest, monthly, payments);
    } else {
        payment.innerHTML = '';
        total.innerHTML = '';
        totalinterest.innerHTML = '';
        chart();
    }
}

function save(amount, apr, years, zipcode) {
    if (window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

window.onload = function() {
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById('amount').value = localStorage.loan_amount;
        document.getElementById('apr').value = localStorage.loan_apr;
        document.getElementById('years').value = localStorage.loan_years;
        document.getElementById('zipcode').value = localStorage.loan_zipcode;
    }
    calculate();
}

function chart(principal, interest, monthly, payments) {
    var graph = document.getElementById('graph');
    graph.width = graph.width;
    if (arguments.length == 0 || !graph.getContext) return;

    var g = graph.getContext('2d');
    var width = graph.width;
    var height = graph.height;

    function paymentToX(n) {
        return n * width / payments;
    }

    function amountToY(a) {
        return height - (a * height / (monthly * payments * 1.05));
    }

    g.moveTo(paymentToX(0), amountToY(0));
    g.lineTo(paymentToX(payments), amountToY(monthly * payments));
    g.lineTo(paymentToX(payments), amountToY(0));
    g.closePath();
    g.fillStyle = "#f88";
    g.fill();

    g.font = 'bold 12px sans-serif';
    g.fillText('Total Interest Payments', 20, 20);

    var equity = 0;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(0));
    for (var p = 1; p <= payments; p++) {

    }
}
