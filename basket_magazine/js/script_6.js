var shoppingCart = [];

function displayShoppingCart() {
    var cart = document.querySelector(".cartProducts");
    var cart_total_price = 0;
    var divProductsTitle = document.createElement('div');
    var divProductsDescription = document.createElement('div');
    var divProductsPrice = document.createElement('div');
    divProductsTitle.className = 'productsTitle';
    divProductsDescription.className = 'productsDescription';
    divProductsPrice.className = 'productsPrice';

    for (var product in shoppingCart) {
        divProductsTitle.innerHTML = shoppingCart[product].Name;
        divProductsDescription.innerHTML = shoppingCart[product].Description;
        divProductsPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price += shoppingCart[product].Price;
    }
    cart.append(divProductsTitle);
    cart.append(divProductsDescription);
    cart.append(divProductsPrice);
    document.getElementById("cart_total").innerHTML = "Общая сумма товаров в корзине  " + cart_total_price;
}

function AddtoCart(name, description, price) {
    var singleProduct = {};
    if (shoppingCart.length == 0) {
        var cart = document.querySelector(".cartProducts");
        var divProductsTitle = document.createElement('div');
        var divProductsDescription = document.createElement('div');
        var divProductsPrice = document.createElement('div');
        var hideDiv = document.querySelector(".cart div");
        divProductsTitle.className = 'productsTitle tabeleHeader';
        divProductsDescription.className = 'productsDescription tabeleHeader';
        divProductsPrice.className = 'productsPrice tabeleHeader';
        divProductsTitle.innerHTML = "Наименование";
        divProductsDescription.innerHTML = "Описание";
        divProductsPrice.innerHTML = "Цена";
        cart.append(divProductsTitle);
        cart.append(divProductsDescription);
        cart.append(divProductsPrice);
        hideDiv.remove();
    }

    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    shoppingCart.push(singleProduct);
    displayShoppingCart();
}