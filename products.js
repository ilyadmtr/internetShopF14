
let basketArrProducts = []; //корзина

$('document').ready(function () {
    loadProducts();
    checkProductsBasket();
});

function loadProducts() {
    //загружаем товары на страницу
    JSON.parse(localStorage.getItem('products')).forEach((products) => {
        if (products.amount != 0) {
            let outProducts = `
        <div class="card">
                <div class="card__inputs-icon">
                    <img src="./media/kreslo.png"/>
                    <div class="basket-form">
                        <div class="counter-form-input">
                            <button class="number-minus" type="button"
                                    onclick="this.nextElementSibling.stepDown()">-
                            </button>
                            <input class="quantity" type="number" placeholder='Enter quantity' min="1" max="${products.amount}" readonly style="font-size:13px" >
                            <button class="number-plus" type="button"
                                    onclick="this.previousElementSibling.stepUp()">
                                +
                            </button>
                        </div>
                        <button class="add-button" data-id="${products.id}" disabled >Add</button>
                    </div>
                </div>
                <div class="card__info">
                    <div class="card__names">
                        <h3 class="card__name">${products.name}</h3>
                        <p class="card__country">${products.country}</p>
                    </div>
                    <h3 class="card__costs">
                        ${products.price} ₴
                    </h3>
                </div>
          </div>            `

            let products__cards = document.querySelector('.products__cards');
            products__cards.insertAdjacentHTML('beforeend', outProducts);

        }
    });
    $('button.number-plus').on('click', removeDesabledProducts);
    $('button.add-button').on('click', addProductsToBasket);
}

//разблокируем кнопку Add
function removeDesabledProducts() {
    $(this).closest('.card').find('button').prop("disabled", false);
}

//добавляем в корзину
function addProductsToBasket(e) {
    e.preventDefault();

    let idProducts = $(this).attr('data-id'),
        inputProductsField = $(this).closest('.card').find('input'),
        quantityProducts = parseInt($(inputProductsField).val()),
        basketArrProduct = {};
        
    //проверяем наличие в корзине
    if (basketArrProducts[idProducts-1] != undefined) {
        basketArrProducts[idProducts-1].quantity += quantityProducts;
    } else {     
        basketArrProduct = JSON.parse(localStorage.getItem('products'))[idProducts-1];
        basketArrProduct.quantity = quantityProducts;
        basketArrProducts.push(basketArrProduct);
    }


    localStorage.setItem('basket', JSON.stringify(basketArrProducts));


    $('.quantity').val('');
    $(this).html('✓ Added');
    $(this).attr('disabled', true);
    $(this).closest('.card').find('button').attr('disabled', true);
}


function checkProductsBasket() {
    //проверяем наличие корзины в localStorage
    if (localStorage.getItem('basket') != null) {
        basketArrProducts = JSON.parse(localStorage.getItem('basket'));
    }
}
console.log(JSON.parse(localStorage.getItem('basket')));