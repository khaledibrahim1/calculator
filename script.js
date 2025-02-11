function calculate() {
    const years = parseInt(document.getElementById('years').value);
    const capital = parseFloat(document.getElementById('capital').value);
    let rate;

    if (years === 1) {
        if (capital <= 100000) {
            rate = 0.10; // 10% لحد 100,000
        } else if (capital <= 1000000) {
            // زيادة تدريجية بمقدار 0.2% لكل 100,000
            const increments = Math.floor((capital - 100000) / 100000);
            rate = 0.10 + (0.002 * increments); // 0.002 = 0.2%
            rate = Math.min(rate, 0.115); // الحد الأقصى للنسبة 11.5%
        } else {
            rate = 0.115; // 11.5% لأكثر من 1,000,000
        }
    } else if (years === 2) {
        if (capital <= 100000) {
            rate = 0.24; // 24% لحد 100,000
        } else if (capital <= 1000000) {
            // زيادة تدريجية بمقدار 0.2% لكل 100,000
            const increments = Math.floor((capital - 100000) / 100000);
            rate = 0.24 + (0.002 * increments); // 0.002 = 0.2%
            rate = Math.min(rate, 0.27); // الحد الأقصى للنسبة 27%
        } else {
            rate = 0.27; // 27% لأكثر من 1,000,000
        }
    } else if (years === 3) {
        if (capital <= 100000) {
            rate = 0.42; // 42% لحد 100,000
        } else if (capital <= 1000000) {
            // زيادة تدريجية بمقدار 0.2% لكل 100,000
            const increments = Math.floor((capital - 100000) / 100000);
            rate = 0.42 + (0.002 * increments); // 0.002 = 0.2%
            rate = Math.min(rate, 0.45); // الحد الأقصى للنسبة 45%
        } else {
            rate = 0.45; // 45% لأكثر من 1,000,000
        }
    }

    const total = capital * ( rate);
    const monthly = total / (years * 12);

    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('monthly').value = monthly.toFixed(2);

    // إضافة تأثير الضوء
    const totalElement = document.getElementById('total');
    const monthlyElement = document.getElementById('monthly');

    totalElement.classList.add('highlight');
    monthlyElement.classList.add('highlight');

    // إزالة التأثير بعد 3 ثوانٍ
    setTimeout(() => {
        totalElement.classList.remove('highlight');
        monthlyElement.classList.remove('highlight');
    }, 3000); // 3000 ميلي ثانية = 3 ثوانٍ
}