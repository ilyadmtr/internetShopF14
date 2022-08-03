//Popup Script Start
$('.create-btn').click(function () {
  $('.admin-page').css('filter', 'blur(5px');
  $('.overlay').fadeIn();

});
//input-popup-value
var inputTitleAdmin = $('.input-Title').val();
var inputUrlAdmin = $('.input-Url').val();
var inputContryAdmin = $('.input-Contry').val();
var inputQuantityAdmin = $('.input-Quantity').val();
var inputPriceAdmin = $('.input-Price').val();
var innerIdAdmin = $('.input-Id').val();
var erorTextAdmin = document.getElementById
('eror-Text');
// 
let btnPopupAdmin = document.getElementById('end-popup');
btnPopupAdmin.addEventListener('click', function (event) {
  //input-popup-value
  var inputTitleAdmin = $('.input-Title').val();
  var inputUrlAdmin = $('.input-Url').val();
  var inputContryAdmin = $('.input-Contry').val();
  var inputQuantityAdmin = $('.input-Quantity').val();
  var inputPriceAdmin = $('.input-Price').val();
  var innerIdAdmin = $('.input-Id').val();
  // 
  //Eror text
  var erorTextAdmin = document.getElementById
  ('eror-Text');
  //
  //localStorage
  productObject(innerIdAdmin, inputTitleAdmin, inputUrlAdmin, inputContryAdmin, inputQuantityAdmin, inputPriceAdmin);

  // /Проверка   введенных данных в input
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
    newProduct();
    document.getElementById('myform').reset();
    $('.overlay').fadeOut();
    $('.admin-page').css('filter', 'none');

  }

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
//Получение данных с localStorage
function getProducts() {
  return JSON.parse(localStorage.getItem('products'));
}

//
// localStorage Start
var producsArr = []; // 
function productObject(innerIdAdmin, inputTitleAdmin, inputUrlAdmin, inputContryAdmin, inputQuantityAdmin, inputPriceAdmin) {
  var arr = [];
  var arrAdmin = {
    id: innerIdAdmin,
    name: inputTitleAdmin,
    country: inputContryAdmin,
    amount: inputQuantityAdmin,
    price: inputPriceAdmin,
    iconURl: inputUrlAdmin
  };
  producsArr.push(arrAdmin);
  let cities = producsArr.reduce((acc, id) => {
    if (acc.map[id.id]) // если данный город уже был
      return acc; // ничего не делаем, возвращаем уже собранное
    acc.map[id.id] = true; // помечаем город, как обработанный
    acc.cities.push(id); // добавляем объект в массив городов
    return acc; // возвращаем собранное
  }, {
    map: {}, // здесь будут отмечаться обработанные города
    cities: [] // здесь конечный массив уникальных городов
  })
    .cities; // получаем конечный массив
  console.log(cities);
  return localStorage.setItem('products', JSON.stringify(cities));

}
// End
//Что бы товары оставись на вкладке
window.addEventListener('load', function () {
  var newProductAdmin = getProducts();
  console.log(newProductAdmin);
  console.log(newProductAdmin);
  if (newProductAdmin !== null) {
    //Перебор данных
    for (var key in newProductAdmin) {

      var tbodyAdmin = document.getElementById('admin-page-tbody');
      var trAdmin = document.createElement('tr');
      trAdmin.className = 'admin-page-table__item';
      var idAdmin = document.createElement('td');
      var TitleAdmin = document.createElement('td');
      var IconAdmin = document.createElement('td');
      var URLimgAdmin = document.createElement('img');
      var CountryAdmin = document.createElement('td');
      var QuantitydAdmin = document.createElement('td');
      var PricedAdmin = document.createElement('td');
      var EditAdmin = document.createElement('td');
      var btnEditAdmin = document.createElement('button');
      var imgEditAdmin = document.createElement('img');
      imgEditAdmin.src = "./media/icons8-edit-64.png";
      var RemoveAdmin = document.createElement('td');
      var btnRemoveAdmin = document.createElement('button');
      var imgRemoveAdmin = document.createElement('img');
      imgRemoveAdmin.src = "./media/trash.png";
      idAdmin.innerText = newProductAdmin[key].id;
      CountryAdmin.innerText = newProductAdmin[key].name;
      QuantitydAdmin.innerText = newProductAdmin[key].amount;
      TitleAdmin.innerText = newProductAdmin[key].name;
      PricedAdmin.innerText = newProductAdmin[key].price;
      URLimgAdmin.src = newProductAdmin[key].iconURl;
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
  }
});
//

// New Product

function newProduct() {

  var newProductAdmin = getProducts();
  if (newProductAdmin !== null) {
    //Перебор данных

    for (var key in newProductAdmin) {

    }
    var tbodyAdmin = document.getElementById('admin-page-tbody');
    var trAdmin = document.createElement('tr');
    trAdmin.className = 'admin-page-table__item';
    var idAdmin = document.createElement('td');
    var TitleAdmin = document.createElement('td');
    var IconAdmin = document.createElement('td');
    var URLimgAdmin = document.createElement('img');
    var CountryAdmin = document.createElement('td');
    var QuantitydAdmin = document.createElement('td');
    var PricedAdmin = document.createElement('td');
    var EditAdmin = document.createElement('td');
    var btnEditAdmin = document.createElement('button');
    var imgEditAdmin = document.createElement('img');
    imgEditAdmin.src = "./media/icons8-edit-64.png";
    var RemoveAdmin = document.createElement('td');
    var btnRemoveAdmin = document.createElement('button');
    var imgRemoveAdmin = document.createElement('img');
    imgRemoveAdmin.src = "./media/trash.png";
    idAdmin.innerText = newProductAdmin[key].id;
    CountryAdmin.innerText = newProductAdmin[key].name;
    QuantitydAdmin.innerText = newProductAdmin[key].amount;
    TitleAdmin.innerText = newProductAdmin[key].name;
    PricedAdmin.innerText = newProductAdmin[key].price;
    URLimgAdmin.src = newProductAdmin[key].iconURl;
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

    //

  }
}


// New product end

