let getLocalStorageBasket = JSON.parse(localStorage.getItem('basket'));

let tableBasket = document.querySelector('.basket-table');
let priceBasket = document.querySelector('.price-basket');


function showItemsBasket() {
    let totalValue = 0;
    for (let i = 0; i < getLocalStorageBasket.length; i++) {
        let trItemBasket = document.createElement('tr');
        trItemBasket.classList.add('tr-basket');
        trItemBasket.innerHTML = `
                                    <td>${getLocalStorageBasket[i].id}.</td>
                                    <td>${getLocalStorageBasket[i].name}</td>
                                    <td class="input-td">
                                        <div class="counter-form-input">
                                            <button class="number-minus" type="button"
                                                onclick="this.nextElementSibling.stepDown()" data-id="${getLocalStorageBasket[i].id}">-
                                            </button>
                                            <input type="number" placeholder='Enter quantity' min="1" value="${getLocalStorageBasket[i].quantity}">
                                            <button class="number-plus" type="button"
                                                onclick="this.previousElementSibling.stepUp()" data-id="${getLocalStorageBasket[i].id}">
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td class="price-basket">${(getLocalStorageBasket[i].price * getLocalStorageBasket[i].quantity).toFixed(2)}$</td>
        `
        tableBasket.append(trItemBasket);
        totalValue += +(getLocalStorageBasket[i].price * getLocalStorageBasket[i].quantity);
    }
    let trEndBasket = document.createElement('tr');
    trEndBasket.classList.add('tr-basket');
    trEndBasket.innerHTML = `
                            <td colspan="3" class="basket-table_total">Total:</td>
                            <td class="basket-table-total-value">${totalValue.toFixed(2)}$</td>
    `;
    tableBasket.append(trEndBasket);

}
showItemsBasket();




document.onclick = function (event) {
    let trItemBasket = document.querySelectorAll('.tr-basket');
    if (event.target.classList.contains('number-plus')) {
        plusFunction(event.target.dataset.id);
        trItemBasket.forEach(function (item) {
            item.style.display = 'none';
        })
    }
    else if (event.target.classList.contains('number-minus')) {
        minusFunction(event.target.dataset.id);
        trItemBasket.forEach(function (item) {
            item.style.display = 'none';
        })
    }
}

const plusFunction = id => {
    if (getLocalStorageBasket[id - 1].quantity >= getLocalStorageBasket[id - 1].amount) {
        getLocalStorageBasket[id - 1].quantity = getLocalStorageBasket[id - 1].amount - 1
    }
    getLocalStorageBasket[id - 1].quantity++;
    showItemsBasket();
}

const minusFunction = id => {
    console.log(getLocalStorageBasket[id - 1].quantity <= 1);
    if (getLocalStorageBasket[id - 1].quantity <= 1) {
        getLocalStorageBasket[id - 1].quantity += 1;
    }
    getLocalStorageBasket[id - 1].quantity--;
    showItemsBasket();
}
