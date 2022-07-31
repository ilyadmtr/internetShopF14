const productsArrBasket = [
    {
        name: 'Stylish Grey Chair(Ukraine)',
        id: '1',
        country: 'Ukraine',
        amount: 30,
        price: 1.6,
        iconURL: 'href',
        quantity: 1,
    },
    {
        name: 'Stylish Grey Chair(China)',
        id: '2',
        country: 'Ukraine',
        amount: 30,
        price: 2,
        iconURL: 'href',
        quantity: 2,
    },
    {
        name: 'Stylish Grey Chair(USA)',
        id: '3',
        country: 'Ukraine',
        amount: 30,
        price: 2,
        iconURL: 'href',
        quantity: 2,
    },

];

localStorage.setItem('basket', JSON.stringify(productsArrBasket));
let getLocalStorageBasket = JSON.parse(localStorage.getItem('basket'));

let tableWrapperBasket = document.querySelector('.table-wrapper');
let basketTableBasket = document.querySelector('.basket-table');
let basketTitleBasket = document.querySelector('.table-title');
let costBasket = document.querySelector('.cost');
let itemBasket;


function showBasketDetails() {
    let titleBasket = document.createElement('tr');
    titleBasket.innerHTML = `
        <td>№</td>
        <td>Product</td>
        <td>Quantity</td>
        <td>Price</td>
    
    `
    basketTableBasket.append(titleBasket)
    for (let i = 0; i < productsArrBasket.length; i++) {
        if (getLocalStorageBasket.length === 0) {
            basketTableBasket.style.display = 'none';
            let elementEmptyBasket = document.createElement('div');
            elementEmptyBasket.className = 'empty-basket';
            elementEmptyBasket.innerHTML = 'The basket is empty.';
            elementEmptyBasket.style.textAlign = 'center';
            tableWrapperBasket.append(elementEmptyBasket);
        } else {
            let priceResultBasket = getLocalStorageBasket[i].price * getLocalStorageBasket[i].quantity;


            itemBasket = document.createElement('tr');
            itemBasket.innerHTML = `

                <td>${getLocalStorageBasket[i].id}.</td>
                <td>${getLocalStorageBasket[i].name}</td>
                <td class="input-td"><div class="counter-form-input">
                    <button class="number-minus" type="button"
                            onclick="this.nextElementSibling.stepDown()">-
                    </button>
                    <input type="number" placeholder='Enter quantity' min="1" value="${getLocalStorageBasket[i].quantity}" data-set = '${getLocalStorageBasket[i].id}'>
                    <button class="number-plus" type="button"
                            onclick="this.previousElementSibling.stepUp()">
                        +
                    </button>
                </div></td>
                <td class="cost">${priceResultBasket.toFixed(2)}$</td>
            
    `;
            basketTableBasket.append(itemBasket)
        }

    }
    changeValueBasket();
}

showBasketDetails();

function changeValueBasket() {
    let input = document.querySelectorAll('input');
    input.forEach(function (item, value) {
        item.oninput = function () {
            console.log(item.value);
            getLocalStorageBasket[value].quantity = +item.value;
            console.log(getLocalStorageBasket);
            // document.querySelectorAll('tr').forEach(function (element) {
            //     element.style.display = 'none'
            // })
            showBasketDetailsResult();
        }
    })
}


function showBasketDetailsResult() {

    let emptyTrBasket = document.createElement('tr');
    emptyTrBasket.className = 'empty-tr-basket';
    emptyTrBasket.innerHTML = `
    <td> </td>
    <td></td>
    <td> </td>
    <td> </td>`;
    basketTableBasket.append(emptyTrBasket);
    let titleBasket = document.createElement('tr');
    titleBasket.className = 'title-tr-basket';
    titleBasket.innerHTML = `
        <td>№</td>
        <td>Product</td>
        <td>Quantity</td>
        <td>Price</td>
    
    `
    basketTableBasket.append(titleBasket)
    for (let i = 0; i < productsArrBasket.length; i++) {
        if (getLocalStorageBasket.length === 0) {
            basketTableBasket.style.display = 'none';
            let elementEmptyBasket = document.createElement('div');
            elementEmptyBasket.className = 'empty-basket';
            elementEmptyBasket.innerHTML = 'The basket is empty.';
            elementEmptyBasket.style.textAlign = 'center';
            tableWrapperBasket.append(elementEmptyBasket);
        } else {
            let priceResultBasket = getLocalStorageBasket[i].price * getLocalStorageBasket[i].quantity;


            itemBasket = document.createElement('tr');
            itemBasket.className = 'item-tr-basket';
            itemBasket.innerHTML = `

                <td>${getLocalStorageBasket[i].id}.</td>
                <td>${getLocalStorageBasket[i].name}</td>
                <td class="input-td"><div class="counter-form-input">
                    ${getLocalStorageBasket[i].quantity}
                </div></td>
                <td class="cost">${priceResultBasket.toFixed(2)}$</td>
            
    `;
            basketTableBasket.append(itemBasket)
        }

    }
    let resultBasket = document.createElement('tr');
    resultBasket.className = 'result-tr-basket';
    resultBasket.innerHTML = `
                <td colspan="3" class="basket-table_total">Total:</td>
                <td>${sum().toFixed(2)} $</td>
`
    basketTableBasket.append(resultBasket);
}


console.log(getLocalStorageBasket);

function sum() {
    return getLocalStorageBasket.reduce((sum, itemBasket) => sum + itemBasket.price * itemBasket.quantity, 0);
}










