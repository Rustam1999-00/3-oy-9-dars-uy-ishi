var elForm = document.querySelector('.js-form');
var elImput = document.querySelector('.js-input');
var elResult1 = document.querySelector('.js-result1');
var elResult2 = document.querySelector('.js-result2');
var elResult3 = document.querySelector('.js-result3');
var elResult4 = document.querySelector('.js-result4');


var elpioda = 3.6;
var elvelosiped = 20.1;
var elmashina = 70;
var elsamaliot = 800;

var elImputval = +elImput.value

function chat(evt) {
    evt.preventDefault();
    if (elImput.value <= 0 || isNaN(elImput.value)) {
        elResult1.textContent = " - Son va  Harf kiritish mumkun emas";
        elResult1.style.color = 'red';
        elResult1.style.backgroundColor = 'yellow';
       

    } else {
        elResult1.style.color = 'yellow';
        elResult1.style.backgroundColor = 'green';
    }
    // ----------------
    if (elImput.value <= 0 || isNaN(elImput.value)) {
        elResult2.textContent = " - Son va  Harf kiritish mumkun emas";
        elResult2.style.color = 'red';
        elResult2.style.backgroundColor = 'yellow';
       

    } else {
        elResult2.style.color = 'yellow';
        elResult2.style.backgroundColor = 'green';
    }
    // -------------
    if (elImput.value <= 0 || isNaN(elImput.value)) {
        elResult3.textContent = " - Son va  Harf kiritish mumkun emas";
        elResult3.style.color = 'red';
        elResult3.style.backgroundColor = 'yellow';
       

    } else {
        elResult3.style.color = 'yellow';
        elResult3.style.backgroundColor = 'green';
    }
    // -----------------
    if (elImput.value <= 0 || isNaN(elImput.value)) {
        elResult4.textContent = " - Son va  Harf kiritish mumkun emas";
        elResult4.style.color = 'red';
        elResult4.style.backgroundColor = 'yellow';
        return;

    } else {
        elResult4.style.color = 'yellow';
        elResult4.style.backgroundColor = 'green';
    }

// ---------------------------------------------------------
    var natija1 = (elImput.value /
        elpioda).toFixed(1);

    var natija2 = (elImput.value /
    elvelosiped).toFixed(1);

    var natija3 = (elImput.value /
    elmashina).toFixed(1);

    var natija4 = (elImput.value /
    elsamaliot).toFixed(1);
   


    elResult1.textContent = `${natija1} soat`;

    elResult2.textContent = `${natija2} soat`;

    elResult3.textContent = `${natija3} soat`;

    elResult4.textContent = `${natija4} soat`;
    return;

}








elForm.addEventListener('submit', chat);

// console.log(elResult3.textContent );

//  elResult1.textContent =  ( elImput.value / elpioda ).toFixed(1) ;





