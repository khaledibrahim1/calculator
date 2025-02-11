let originalRate;
let originalTotal;
let originalMonthly;

function calculate() {
    const years = parseInt(document.getElementById('years').value);
    const capital = parseFloat(document.getElementById('capital').value);

    if (isNaN(years) || isNaN(capital) || capital <= 0) {
        alert("يرجى إدخال عدد السنوات ورأس المال بشكل صحيح!");
        return;
    }

    let rate;

    if (years === 1) {
        if (capital <= 100000) {
            rate = 0.10;
        } else if (capital <= 1000000) {
            const increments = Math.floor((capital - 100000) / 100000);
            rate = 0.10 + (0.002 * increments);
            rate = Math.min(rate, 0.115);
        } else {
            rate = 0.115;
        }
    } else if (years === 2) {
        if (capital <= 100000) {
            rate = 0.24;
        } else if (capital <= 1000000) {
            const increments = Math.floor((capital - 100000) / 100000);
            rate = 0.24 + (0.002 * increments);
            rate = Math.min(rate, 0.27);
        } else {
            rate = 0.27;
        }
    } else if (years === 3) {
        if (capital <= 100000) {
            rate = 0.42;
        } else if (capital <= 1000000) {
            const increments = Math.floor((capital - 100000) / 100000);
            rate = 0.42 + (0.002 * increments);
            rate = Math.min(rate, 0.45);
        } else {
            rate = 0.45;
        }
    }

    const total = capital * rate;
    const monthly = total / (years * 12);

    originalRate = rate;
    originalTotal = total;
    originalMonthly = monthly;

    document.getElementById('totalLabel').style.display = 'block';
    document.getElementById('total').style.display = 'block';
    document.getElementById('monthlyLabel').style.display = 'block';
    document.getElementById('monthly').style.display = 'block';

    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('monthly').value = monthly.toFixed(2);

    document.getElementById('reduceMonthlyBtn').style.display = 'block';

    const totalElement = document.getElementById('total');
    const monthlyElement = document.getElementById('monthly');

    totalElement.classList.add('highlight');
    monthlyElement.classList.add('highlight');

    setTimeout(() => {
        totalElement.classList.remove('highlight');
        monthlyElement.classList.remove('highlight');
    }, 3000);
}

function showMonthlyInput() {
    if (!originalMonthly) {
        alert("يرجى حساب القيم أولاً قبل تعديل الدفعات الشهرية.");
        return;
    }
    document.getElementById('monthlyInputContainer').style.display = 'block';
}

function adjustTotal() {
    const newMonthly = parseFloat(document.getElementById('newMonthly').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(newMonthly) || newMonthly <= 0) {
        alert("يرجى إدخال مبلغ شهري صالح.");
        return;
    }

    if (newMonthly >= originalMonthly) {
        alert("المبلغ الشهري الجديد يجب أن يكون أقل من المبلغ الأصلي.");
        return;
    }

    let increment = 0;
    const halfOriginalMonthly = originalMonthly / 2;

    if (newMonthly >= originalMonthly * 0.87) {
        increment = 0.001;
    } else if (newMonthly >= originalMonthly * 0.75) {
        increment = 0.002;
    } else if (newMonthly >= originalMonthly * 0.625) {
        increment = 0.003;
    } else if (newMonthly >= halfOriginalMonthly) {
        increment = 0.004;
    } else {
        increment = 0.005;
    }

    const newRate = originalRate + increment;
    const newTotal = originalTotal * (1 + (newRate - originalRate));

    document.getElementById('total').value = newTotal.toFixed(2);
    document.getElementById('monthly').value = newMonthly.toFixed(2);

    document.getElementById('totalLabel').style.display = 'block';
    document.getElementById('total').style.display = 'block';
    document.getElementById('monthlyLabel').style.display = 'block';
    document.getElementById('monthly').style.display = 'block';
}
