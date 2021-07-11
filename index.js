
const bill = document.getElementById('bill');
const form = document.querySelector('.form');
const totalTipEl = document.querySelector('.total-tip');
const personTipEl = document.querySelector('.person-tip');
const people = document.querySelector('#people');
const buttons = document.querySelector('.tip__buttons');
let percentage;
let totalTip;
let personTip;

buttons.addEventListener('click', function (e) {
    // e.preventDefault();
    percentage = e.target.dataset.percent;
    document.querySelectorAll('.btn-tip').forEach(button => {
        button.classList.remove('active');
        e.target.classList.add('active');
    });

    if (people.value == 0) {
        people.style.border = '2px solid red';
        document.querySelector('.error').style.display = 'block';
    } else {
        people.style.border = 'none';
        document.querySelector('.error').style.display = 'none';

    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(bill.value);
    totalTip = +bill.value * (+percentage / 100);
    personTip = totalTip / +people.value;
    totalTipEl.textContent = totalTip.toFixed(2);
    personTipEl.textContent = personTip.toFixed(2);
});