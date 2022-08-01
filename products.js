let productsArr = [
    {
        name: 'Apple',
        id: '1',
        country: 'Ukraine',
        amount: 30,
        price: 100,
        iconURL: 'href'
    },
    {
        name: 'Orange',
        id: '2',
        country: 'Italy',
        amount: 20,
        price: 70,
        iconURL: 'href'
    },
    {
        name: 'wathermelon',
        id: '3',
        country: 'Ukraine',
        amount: 10,
        price: 120,
        iconURL: 'href'
    },
]

function setCartData(){
    localStorage.setItem('products', JSON.stringify(productsArr));
    return false;
}

let basketArrProducts = {}; //корзина

$('document').ready(function () {
    setCartData();
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
                            <input class="quantity" type="number" placeholder='Enter quantity' min="1" max="${products.amount}">
                            <button class="number-plus" type="button"
                                    onclick="this.previousElementSibling.stepUp()">
                                +
                            </button>
                        </div>
                        <button class="add-button" data-id="${products.id}">Add</button>
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
          </div>  
          `

        let products__cards = document.querySelector('.products__cards');
        products__cards.insertAdjacentHTML('beforeend', outProducts);
            
        }        
    });

    $('button.add-button').on('click', addProductsToBasket);
}

//добавляем в корзину
function addProductsToBasket(){
    
      
    let idProducts = $(this).attr('data-id');
    // let inputProducts = document.querySelector('.quantity');
    
        
    //проверяем по id
    if (basketArrProducts[idProducts] != undefined){
        basketArrProducts[idProducts]++;
    }else{
        basketArrProducts[idProducts] = 1;
    }
    localStorage.setItem('basket',JSON.stringify(basketArrProducts));
    console.log(basketArrProducts);

}

function checkProductsBasket(){
    //проверяем наличие корзины в localStorage
    if(localStorage.getItem('basket') != null){
        basketArrProducts = JSON.parse(localStorage.getItem('basket'));
    }    
}