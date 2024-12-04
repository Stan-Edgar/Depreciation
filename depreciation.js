
function straightLine(purchase, dep, yr) {

    for (i = 1; i < (yr + 1); i++) {
    purchase -= dep;
    let final = dep * i;

    result.innerHTML += `Year: ${i}<br>
                End Book value: ${purchase}<br>
                Accumulated Depreciation: ${final}<br><br>`;
    }
}

// straightLine(purchase, depreciation, year);

function reducingMethod(purchase, percentage, yr) {

    let acc = 0;

    for (i = 1; i < (yr + 1); i++) {
        acc = purchase * percentage;
        purchase -= acc;
    
        result.innerHTML += (`Year: ${i}<br>
                    Depreciation: ${acc}<br>
                    End Book value: ${purchase}<br><br>`);
     }

}

// reducingMethod(purchase, rate, year);


// Element Variables

let ps = document.querySelector('#purchase');
let salv = document.querySelector('#salvage');
let yr = document.querySelector('#year');
let rate = document.querySelector('#rate');

let enter = document.querySelector('#btn');
let clear = document.querySelector('#clear');

let method = document.querySelector('#method');
let result = document.querySelector('#result');

enter.addEventListener('click', () => {
    let purchase = parseInt(ps.value);
    let salvage = parseInt(salv.value);
    let year = parseInt(yr.value);

    let four = parseFloat(rate.value);
    alert(four)

    let depreciation = (purchase - salvage) / year;
    
    if (year > 5) {
        result.style.cssText = "font-size: 8px;"
    } else if (year > 10) {
        alert('Error: Year is too buig');
        return;
    }

    if (rate.value === "") {
        method.innerHTML = "Straight Line Method";
        straightLine(purchase, depreciation, year);
    } else {
        method.innerHTML = "Reducing Method";
        reducingMethod(purchase, four, year); 
    }
    
})

clear.addEventListener('click', () => {
    result.innerHTML = "";
})