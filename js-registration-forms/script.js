const form = document.getElementById('register-form');


form.addEventListener('submit', (e) => {
    const RATE_PER_UNIT = 3000;
    let studentNumber = document.getElementById('studentNumber').value;
    let studentName = document.getElementById('studentName').value;
    let college = document.getElementById('college').value;
    let course = document.getElementById('course').value;
    let units = document.getElementById('units').value;

    if (!studentNumber.trim() || !studentName.trim() || !college || !course || !units) {
        e.preventDefault();
        alert('Please fill in all required fields');
        return;
    }

    if (units <= 0 || isNaN(units)) {
        e.preventDefault();
        alert('Units are invalid');
        return;
    }

    let discountRate = getDiscountRate(parseFloat(units));

    let total = units * RATE_PER_UNIT;
    let discount = total * discountRate;
    let tuition = total - discount;

    showOutput(total, discount, tuition);
});

// Code for making lists kind of dynamic
function configureLists (drop1, drop2) {
    let coursesCSCS = ['BIT', 'BCS', 'BIO'];
    let coursesCBAA = ['CBA', 'BCA', 'BSM'];
    let coursesCEAT = ['ECE', 'BSE', 'ENR'];

    switch(drop1.value) {
        case 'CSCS':
            drop2.disabled = false;
            drop2.options.length = 0;
            for (i = 0; i < coursesCSCS.length; i++) {
                createOption(drop2, coursesCSCS[i], coursesCSCS[i]);
            }
            break;
        case 'CBAA':
            drop2.disabled = false;
            drop2.options.length = 0;
            for (i = 0; i < coursesCBAA.length; i++) {
                createOption(drop2, coursesCBAA[i], coursesCBAA[i]);
            }
            break;
        case 'CEAT':
            drop2.disabled = false;
            drop2.options.length = 0;
            for (i = 0; i < coursesCEAT.length; i++) {
                createOption(drop2, coursesCEAT[i], coursesCEAT[i]);
            }
            break;
        default:
            drop2.options.length = 0;
            drop2.disabled = true;
            break;
    }
}

function getDiscountRate(units) {
    if (units > 21) {
        return 0.03;
    } else {
        return 0.015;
    }
}

function createOption(dropdown, text, value) {
    let opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    dropdown.options.add(opt);
}

function showOutput(total, discount, tuition) {
    let success = "Submitted Successfully!\n";
    alert(`${success} Total: ${total.toFixed(2)}\nDiscount: ${discount.toFixed(2)}\nTuition: ${tuition.toFixed(2)}`);
}

