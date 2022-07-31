//Popup Script Start
$('.create-btn').click(function () {
  $('.admin-page').css('filter', 'blur(5px');
  $('.overlay').fadeIn();

});


let producsArr = []; // Object NewProduct 


let btnPopupAdmin = document.getElementById('end-popup');
btnPopupAdmin.addEventListener('click', function (event) {
  let inputTitleAdmin = $('.input-Title').val();
  let inputUrlAdmin = $('.input-Url').val();
  let inputContryAdmin = $('.input-Contry').val();
  let inputQuantityAdmin = $('.input-Quantity').val();
  let inputPriceAdmin = $('.input-Price').val();
  let innerIdAdmin = $('.input-Id').val();
  let erorTextAdmin = document.getElementById
    ('eror-Text');


  // Object NewProduct  Start
  function productObject(innerIdAdmin, inputTitleAdmin, inputUrlAdmin, inputContryAdmin, inputQuantityAdmin, inputPriceAdmin) {
    let arrAdmin = {
      name: inputTitleAdmin,
      id: innerIdAdmin,
      country: inputContryAdmin,
      amount: inputQuantityAdmin,
      price: inputPriceAdmin,
      iconURl: inputUrlAdmin
    };
    producsArr.push(arrAdmin);
    return localStorage.setItem('products', JSON.stringify(producsArr));
  }
console.log(producsArr);
  productObject(innerIdAdmin, inputTitleAdmin, inputUrlAdmin, inputContryAdmin, inputQuantityAdmin, inputPriceAdmin);


  // Object NewProduct End


  // /Проверка   товарa
  


  if (innerIdAdmin.length == 0) {
    erorTextAdmin.innerText = 'Заполните все поля!';
  } else
    if (inputTitleAdmin.length == 0) {
      erorTextAdmin.innerText = 'Заполните все поля!';
    } else
      if (inputUrlAdmin.length == 0) {
        erorTextAdmin.innerText = 'Заполните все поля!';
      } else
        if (inputContryAdmin.length == 0) {
          erorTextAdmin.innerText = 'Заполните все поля!';
        } else
          if (inputPriceAdmin.length == 0) {
            erorTextAdmin.innerText = 'Заполните все поля!';
          } else
            if (inputQuantityAdmin <= 0 || inputQuantityAdmin.length == 0) {
              erorTextAdmin.innerText = 'Не вводите "-" значения или заполните поле!';
            } else {
          
              $('#eror-Text').empty();

              newProduct(innerIdAdmin, inputTitleAdmin, inputUrlAdmin, inputContryAdmin, inputQuantityAdmin, inputPriceAdmin);


              document.getElementById('myform').reset();
              $('.overlay').fadeOut();
              $('.admin-page').css('filter', 'none');

            };


// /Проверка завершина
});

$(document).mouseup(function (event) {
  var popAdmin = $('.overlay');
  if (event.target != popAdmin && popAdmin.has(event.target).length == 0) {
    $('.overlay').fadeOut();
    $('.admin-page').css('filter', 'none');
  }
});
//Popup Script end

let itemId;
let trAdmin;

//New Product
function newProduct(innerIdAdmin, inputTitleAdmin, inputUrlAdmin, inputContryAdmin, inputQuantityAdmin, inputPriceAdmin) {
  let tbodyAdmin = document.getElementById('admin-page-tbody');
  let trAdmin = document.createElement('tr');
  trAdmin.className = 'admin-page-table__item';
  trAdmin.setAttribute('data-id', `${innerIdAdmin}`);
  let itemId = trAdmin.getAttribute('data-id');
  console.log(itemId);
  let idAdmin = document.createElement('td');
  let TitleAdmin = document.createElement('td');
  let IconAdmin = document.createElement('td');
  let URLimgAdmin = document.createElement('img');
  let CountryAdmin = document.createElement('td');
  let QuantitydAdmin = document.createElement('td');
  let PricedAdmin = document.createElement('td');
  let EditAdmin = document.createElement('td');
  let btnEditAdmin = document.createElement('button');
  let imgEditAdmin = document.createElement('img');
  imgEditAdmin.src = "./media/icons8-edit-64.png";
  let RemoveAdmin = document.createElement('td');
  let btnRemoveAdmin = document.createElement('button');
  let imgRemoveAdmin = document.createElement('img');
  imgRemoveAdmin.src = "./media/trash.png";
  idAdmin.innerText = innerIdAdmin;
  CountryAdmin.innerText = inputContryAdmin;
  QuantitydAdmin.innerText = inputQuantityAdmin;
  TitleAdmin.innerText = inputTitleAdmin;
  PricedAdmin.innerText = inputPriceAdmin;
  URLimgAdmin.src = inputUrlAdmin;
  IconAdmin.append(URLimgAdmin);
  EditAdmin.append(btnEditAdmin);
  btnEditAdmin.append(imgEditAdmin);
  RemoveAdmin.append(btnRemoveAdmin);
  RemoveAdmin.append(imgRemoveAdmin);
  trAdmin.append(idAdmin);
  trAdmin.append(TitleAdmin);
  trAdmin.append(IconAdmin);
  trAdmin.append(CountryAdmin);
  trAdmin.append(QuantitydAdmin);
  trAdmin.append(PricedAdmin);
  trAdmin.append(EditAdmin);
  trAdmin.append(RemoveAdmin);
  tbodyAdmin.append(trAdmin);



}


// New product end

