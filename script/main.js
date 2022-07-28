//Popup Script
$('.create-btn').click(function () {
  $('.admin-page').css('filter', 'blur(5px');
  $('.overlay').fadeIn();
  
});
let btnPopup = document.getElementById('end-popup');
btnPopup.addEventListener('click',function(){
  let inputTitle = $('.input-Title').val();
  let inputUrl = $('.input-Url').val();
  let inputContry = $('.input-Contry').val();
  let inputQuantity = $('.input-Quantity').val();
  let inputPrice = $('.input-Price').val();
  let erorText = document.getElementById('eror-Text');

   if(inputTitle.length == 0){
    erorText.innerText = 'Заполните все поля!';
   }else 
   if(inputUrl.length == 0){
    erorText.innerText = 'Заполните все поля!';
   }else 
   if(inputContry.length == 0){
    erorText.innerText = 'Заполните все поля!';
   }else 
   if(inputPrice.length == 0){
    erorText.innerText = 'Заполните все поля!';
   }else 
   if(inputQuantity <= 0 || inputQuantity.length == 0){
    erorText.innerText = 'Не вводите "-" значения или заполните поле!';
   }else{
    $('#eror-Text').empty();
    newProduct(inputTitle, inputUrl, inputContry, inputQuantity, inputPrice);
    document.getElementById('myform').reset();
    $('.overlay').fadeOut();
    $('.admin-page').css('filter', 'none');
    
   }

 
});

$(document).mouseup(function (event) {
  var pop = $('.overlay');
  if (event.target != pop && pop.has(event.target).length == 0) {
    $('.overlay').fadeOut();
    $('.admin-page').css('filter', 'none');
  }
});
//Popup Script end
//New Product
function newProduct(inputTitle, inputUrl, inputContry, inputQuantity, inputPrice){
  let tbody = document.getElementById('admin-page-tbody');
  // let inputTitle = $('.input-Title').val();
  // let inputUrl = $('.input-Url').val();
  // let inputContry = $('.input-Contry').val();
  // let inputQuantity = $('.input-Quantity').val();
  // let inputPrice = $('.input-Price').val();
  let tr = document.createElement('tr');
  tr.className = 'admin-page-table__item';
  let id = document.createElement('td');
  let Title = document.createElement('td');
  let Icon = document.createElement('td');
  let URLimg = document.createElement('img');
  let Country = document.createElement('td');
  let Quantityd = document.createElement('td');
  let Priced = document.createElement('td');
  let Edit = document.createElement('td');
  let btnEdit = document.createElement('button');
  let imgEdit = document.createElement('img');
  imgEdit.src = "./media/icons8-edit-64.png";
  let Remove = document.createElement('td');
  let btnRemove = document.createElement('button');
  let imgRemove = document.createElement('img');
  imgRemove.src = "./media/trash.png";
  id.innerText = '1.';
  Country.innerText = inputContry;
  Quantityd.innerText = inputQuantity;
  Title.innerText = inputTitle;
  Priced.innerText = inputPrice;
  URLimg.src = inputUrl;
  Icon.append(URLimg);
  Edit.append(btnEdit);
  btnEdit.append(imgEdit);
  Remove.append(btnRemove);
  Remove.append(imgRemove);
  tr.append(id);
  tr.append(Title);
  tr.append(Icon);
  tr.append(Country);
  tr.append(Quantityd);
  tr.append(Priced);
  tr.append(Edit);
  tr.append(Remove);
  tbody.append(tr);
}
// New product end