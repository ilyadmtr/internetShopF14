let producsArr = []; // Object NewProduct

let action = "";

let btnPopupAdmin = document.getElementById("end-popup");
btnPopupAdmin.addEventListener("click", () => {
  if (action === "create") {
    createNewProduct();
  } else if (action === "edit") {
    checkEditedProduct();
  }
});

//Popup Script Start
$(".create-btn").click(function () {
  $(".admin-page").css("filter", "blur(5px");
  $(".overlay").fadeIn();
  action = "create";
});

function createNewProduct() {
  let inputTitleAdmin = $(".input-Title").val();
  let inputUrlAdmin = $(".input-Url").val();
  let inputContryAdmin = $(".input-Contry").val();
  let inputQuantityAdmin = $(".input-Quantity").val();
  let inputPriceAdmin = $(".input-Price").val();
  let innerIdAdmin = $(".input-Id").val();
  let erorTextAdmin = document.getElementById("eror-Text");

  // Object NewProduct  Start
  function productObject(
    innerIdAdmin,
    inputTitleAdmin,
    inputUrlAdmin,
    inputContryAdmin,
    inputQuantityAdmin,
    inputPriceAdmin
  ) {
    let arrAdmin = {
      name: inputTitleAdmin,
      id: innerIdAdmin,
      country: inputContryAdmin,
      amount: inputQuantityAdmin,
      price: inputPriceAdmin,
      iconURl: inputUrlAdmin,
    };
    producsArr.push(arrAdmin);
    return localStorage.setItem("products", JSON.stringify(producsArr));
  }
  productObject(
    innerIdAdmin,
    inputTitleAdmin,
    inputUrlAdmin,
    inputContryAdmin,
    inputQuantityAdmin,
    inputPriceAdmin
  );

  // Object NewProduct End

  // /Проверка   товарa

  if (innerIdAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputTitleAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputUrlAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputContryAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputPriceAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputQuantityAdmin <= 0 || inputQuantityAdmin.length == 0) {
    erorTextAdmin.innerText = 'Не вводите "-" значения или заполните поле!';
    return;
  } else {
    $("#eror-Text").empty();

    newProduct(
      innerIdAdmin,
      inputTitleAdmin,
      inputUrlAdmin,
      inputContryAdmin,
      inputQuantityAdmin,
      inputPriceAdmin
    );

    document.getElementById("myform").reset();
    $(".overlay").fadeOut();
    $(".admin-page").css("filter", "none");
  }

  action = "";

  inputTitleAdmin = "";
  inputUrlAdmin = "";
  inputContryAdmin = "";
  inputQuantityAdmin = "";
  inputPriceAdmin = "";
  innerIdAdmin = "";
  // /Проверка завершина
}

$(document).mouseup(function (event) {
  var popAdmin = $(".overlay");
  if (event.target != popAdmin && popAdmin.has(event.target).length == 0) {
    $(".overlay").fadeOut();
    $(".admin-page").css("filter", "none");

    if (action == "edit") clearInputs();
  }
});
//Popup Script end

let itemId;
let trAdmin;

//New Product
function newProduct(
  innerIdAdmin,
  inputTitleAdmin,
  inputUrlAdmin,
  inputContryAdmin,
  inputQuantityAdmin,
  inputPriceAdmin
) {
  let tbodyAdmin = document.getElementById("admin-page-tbody");
  let trAdmin = document.createElement("tr");
  trAdmin.className = "admin-page-table__item";
  trAdmin.setAttribute("data-id", `${innerIdAdmin}`);
  let itemId = trAdmin.getAttribute("data-id");
  let idAdmin = document.createElement("td");
  let TitleAdmin = document.createElement("td");
  let IconAdmin = document.createElement("td");
  let URLimgAdmin = document.createElement("img");
  let CountryAdmin = document.createElement("td");
  let QuantitydAdmin = document.createElement("td");
  let PricedAdmin = document.createElement("td");
  let EditAdmin = document.createElement("td");

  let btnEditAdmin = document.createElement("button");
  btnEditAdmin.addEventListener("click", () => {
    showEditProduct(
      trAdmin
    );
  });

  let imgEditAdmin = document.createElement("img");
  imgEditAdmin.src = "./media/icons8-edit-64.png";
  let RemoveAdmin = document.createElement("td");

  let btnRemoveAdmin = document.createElement("button");
  btnRemoveAdmin.addEventListener("click", () => {
    deleteProduct(innerIdAdmin, trAdmin);
  });

  let imgRemoveAdmin = document.createElement("img");
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
  btnRemoveAdmin.append(imgRemoveAdmin);
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

function clearInputs() {
  let inputId = document.querySelector(".input-Id");
  let inputTitle = document.querySelector(".input-Title");
  let inputUrl = document.querySelector(".input-Url");
  let inputContry = document.querySelector(".input-Contry");
  let inputQuantity = document.querySelector(".input-Quantity");
  let inputPrice = document.querySelector(".input-Price");

  inputId.value = "";
  inputTitle.value = "";
  inputUrl.value = "";
  inputContry.value = "";
  inputQuantity.value = "";
  inputPrice.value = "";

  action = "";
}

let id = '';
function showEditProduct(
  row
) {
  let createBtn = document.querySelector(".create-btn");
  createBtn.click();

  action = "edit";

  let inputId = document.querySelector(".input-Id");
  let inputTitle = document.querySelector(".input-Title");
  let inputUrl = document.querySelector(".input-Url");
  let inputContry = document.querySelector(".input-Contry");
  let inputQuantity = document.querySelector(".input-Quantity");
  let inputPrice = document.querySelector(".input-Price");

  let cells = row.querySelectorAll('td');

  id = cells[0].textContent;

  inputId.value = cells[0].textContent;
  inputTitle.value = cells[1].textContent;

  let img = cells[2].querySelector('img');
  inputUrl.value = img.src;

  inputContry.value = cells[3].textContent;
  inputQuantity.value = cells[4].textContent;
  inputPrice.value = cells[5].textContent;
}

function checkEditedProduct() {
  let inputTitleAdmin = $(".input-Title").val();
  let inputUrlAdmin = $(".input-Url").val();
  let inputContryAdmin = $(".input-Contry").val();
  let inputQuantityAdmin = $(".input-Quantity").val();
  let inputPriceAdmin = $(".input-Price").val();
  let innerIdAdmin = $(".input-Id").val();
  let erorTextAdmin = document.getElementById("eror-Text");

  if (innerIdAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputTitleAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputUrlAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputContryAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputPriceAdmin.length == 0) {
    erorTextAdmin.innerText = "Заполните все поля!";
    return;
  } else if (inputQuantityAdmin <= 0 || inputQuantityAdmin.length == 0) {
    erorTextAdmin.innerText = 'Не вводите "-" значения или заполните поле!';
    return;
  } else {
    $("#eror-Text").empty();

    editProduct();

    document.getElementById("myform").reset();
    $(".overlay").fadeOut();
    $(".admin-page").css("filter", "none");
  }

  action = "";
  id = '';

  inputTitleAdmin = "";
  inputUrlAdmin = "";
  inputContryAdmin = "";
  inputQuantityAdmin = "";
  inputPriceAdmin = "";
  innerIdAdmin = "";
}

function editProduct() {
  for (let i = 0; i < producsArr.length; i++) {
    if (producsArr[i].id == id) {
      let inputTitleAdmin = $(".input-Title").val();
      let inputUrlAdmin = $(".input-Url").val();
      let inputContryAdmin = $(".input-Contry").val();
      let inputQuantityAdmin = $(".input-Quantity").val();
      let inputPriceAdmin = $(".input-Price").val();
      let innerIdAdmin = $(".input-Id").val();

      producsArr[i].id = innerIdAdmin;
      producsArr[i].name = inputTitleAdmin;
      producsArr[i].iconURl = inputUrlAdmin;
      producsArr[i].country = inputContryAdmin;
      producsArr[i].amount = inputQuantityAdmin;
      producsArr[i].price = inputPriceAdmin;

      updateProductView(
        innerIdAdmin,
        inputTitleAdmin,
        inputUrlAdmin,
        inputContryAdmin,
        inputQuantityAdmin,
        inputPriceAdmin
      );

      localStorage.setItem("products", JSON.stringify(producsArr));
    }
  }
}

function updateProductView(
  newId,
  name,
  iconUrl,
  country,
  amount,
  price
) {
  let rows = document.querySelectorAll(".admin-page-table__item");

  rows.forEach((row) => {
    let cells = row.querySelectorAll("td");

    if (cells[0].textContent == id) {
      cells[0].innerHTML = newId;
      cells[1].innerHTML = name;

      let img = cells[2].querySelector("img");
      img.src = iconUrl;

      cells[3].innerHTML = country;
      cells[4].innerHTML = amount;
      cells[5].innerHTML = price;

      row.setAttribute('data-id', newId);
    }
  });
}

function deleteProduct(productID, productView) {
  producsArr = producsArr.filter((product) => product.id !== productID);
  productView.remove();
  localStorage.setItem("products", JSON.stringify(producsArr));
}
