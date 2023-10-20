let productos = [
    {
        id: 1,
        nombre: 'Pera Conferencia',
        precio: 0.34,
        imagen: 'item1.jpeg'
    },
    {
        id: 2,
        nombre: 'Manzana Golden',
        precio: 0.36,
        imagen: 'item2.jpeg'
    },
    {
        id: 3,
        nombre: 'Uvas',
        precio: 2.60,
        imagen: 'item3.jpeg'
    },
    {
        id: 4,
        nombre: 'Banana',
        precio: 0.21,
        imagen: 'item4.jpeg'
    },
    {
        id: 5,
        nombre: 'Melón Galia',
        precio: 2.71,
        imagen: 'item5.jpeg'
    },
    {
        id: 6,
        nombre: 'Mandarina',
        precio: 0.36,
        imagen: 'item6.jpeg'
    },
    {
        id: 7,
        nombre: 'Piña',
        precio: 2.30,
        imagen: 'item7.jpeg'
    },
    {
        id: 8,
        nombre: 'Mango',
        precio: 1.23,
        imagen: 'item8.jpeg'
    }



];


let cartItems = [];

function renderProducts(){
    let mainContainer = document.getElementById('mainContainer');

    for (let i = 0; i < productos.length; i++){
        
        let divElementItem = document.createElement ('div');
        divElementItem.classList.add('item');

        let divElementItemDescription = document.createElement('div');
        divElementItemDescription.classList.add('item-description');
    
        let imgElementItem = document.createElement('img');
        imgElementItem.classList.add('item-img');
        let url ='./assets/' + productos[i].imagen;
        imgElementItem.setAttribute('src', url);

        let nameElementItem = document.createElement('p');
        nameElementItem.classList.add('item-name');
        nameElementItem.textContent = productos[i].nombre;

        let priceElementItem = document.createElement('p');
        priceElementItem.classList.add('item-price');
        priceElementItem.textContent = productos[i].precio + '€';

        let buttonElementItem = document.createElement('button');
        buttonElementItem.classList.add('item-button');
        buttonElementItem.textContent = 'Añadir al carrito';
        buttonElementItem.addEventListener('click', function() { addProductsToCart(productos[i])});
        
        divElementItemDescription.appendChild(imgElementItem);
        divElementItemDescription.appendChild(nameElementItem);
        divElementItemDescription.appendChild(priceElementItem);
        divElementItemDescription.appendChild(buttonElementItem);
        divElementItem.appendChild(divElementItemDescription);

        mainContainer.appendChild(divElementItem);
    }
}
function addProductsToCart(item){
    cartItems.push(item);
    console.log(cartItems);
    renderCart();
}

function renderCart(){
    let elementNoProducts = document.getElementById('cart-no-products');
    let elementCartList = document.getElementById('cartItems');
    elementCartList.textContent = '';
    
    let totalPrice = 0;
    if(cartItems.length > 0){

        elementNoProducts.style.display = 'none';

    for(let i = 0; i < cartItems.length; i++){

    

    let elementCartItem = document.createElement ('div');
    elementCartItem.classList.add('cart-item');
    
    let elementCartImg = document.createElement('img');
    elementCartImg.classList.add('cart-item-img');
    let url = './assets/' + cartItems[i].imagen;
    elementCartImg.setAttribute('src', url);


    let elementCartDescription = document.createElement('p');
    elementCartDescription.classList.add('cart-item-description');
    elementCartDescription.textContent = cartItems[i].nombre;

    let elementCartPrice = document.createElement ('p');
    elementCartPrice.classList.add('cart-item-price');
    elementCartPrice.textContent = cartItems[i].precio +'€';

    let divCart = document.createElement('div');
    divCart.classList.add('cart-item-div');

    let elementCartQuantity = document.createElement('p');
    elementCartQuantity.classList.add('cart-item-quantity');
    elementCartQuantity.textContent = '1 Ud.';

    let elementCartButton = document.createElement('button');
    elementCartButton.classList.add('cart-item-button');
    elementCartButton.textContent = '-';
    elementCartButton.addEventListener('click', function() { deleteProductsFromCart(i)});

    elementCartItem.appendChild(elementCartImg);
    elementCartItem.appendChild(elementCartDescription);
    elementCartItem.appendChild(elementCartPrice);
    
    elementCartItem.appendChild(elementCartQuantity);
    elementCartItem.appendChild(elementCartButton);
    
    divCart.appendChild(elementCartQuantity);
    divCart.appendChild(elementCartButton);
    
    elementCartItem.appendChild(divCart);

    elementCartList.appendChild(elementCartItem); 
    
    totalPrice += cartItems[i].precio;
    }
    let elementTotal = document.createElement('p');
        elementTotal.classList.add('cart-total');
        elementTotal.textContent = 'TOTAL:' +totalPrice.toFixed(2) + '€';
        

    
        elementCartList.appendChild(elementTotal);
    
} else{
    elementNoProducts.style.display = 'flex';
}
}



function deleteProductsFromCart(elementPosition){
    let cartItemsAux = [];

    for(let i = 0; i< cartItems.length; i++){
        if(i !== elementPosition){
            cartItemsAux.push(cartItems[i]);
        }
    }
    cartItems = cartItemsAux;
    renderCart();
}

renderProducts()
renderCart()

