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
            let itemBasket = document.createElement('tr');
            itemBasket.innerHTML = `

                <td>${getLocalStorageBasket[i].id}.</td>
                <td>${getLocalStorageBasket[i].name}</td>
                <td class="input-td"><div class="counter-form-input">
                    <button class="number-minus" type="button"
                            onclick="this.nextElementSibling.stepDown()">-
                    </button>
                    <input type="number" placeholder='Enter quantity' min="1" value="${getLocalStorageBasket[i].quantity}">
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


function sum() {
    return getLocalStorageBasket.reduce((sum, itemBasket) => sum + itemBasket.price * itemBasket.quantity, 0);
}








let resultBasket = document.createElement('tr');
resultBasket.innerHTML = `
                <td colspan="3" class="basket-table_total">Total:</td>
                <td>${sum()}$</td>
`
basketTableBasket.append(resultBasket);

