const bill = document.querySelector('.input_bill');
const person = document.querySelector('.input_person');
const quality = document.querySelector('.quality');
const calc = document.querySelector('.calc');
const result = document.querySelector('.total');

calc.addEventListener('click', () => {
        let total = (bill.value * quality.value / person.value).toFixed(2);
        console.log(quality.value)
        if (isNaN(total)) {
            result.innerHTML = '0$ each';
        } else {
            result.innerHTML = total + '$ each';
            console.log(total)
        }
            result.classList.add('show');
            setTimeout(() => result.classList.remove('show'), 3000);
})
