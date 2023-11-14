const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

products.forEach(item => {
    const value = item.querySelector('.product__quantity-value');
    item.querySelector('.product__quantity-control_dec').onclick = () => {
        if (value.textContent != 1){
            value.textContent = value.textContent - 1;
        }
    }

    item.querySelector('.product__quantity-control_inc').onclick = () => {
        value.textContent = +value.textContent + 1;
    }

    item.querySelector('.product__add').onclick = () => {
        AddProduct(item);
        value.textContent = 1;
    }
})

function AddProduct(product) {
    let volume = product.querySelector('.product__quantity-value').textContent;
	const productInCart = Array.from(cart.children).find((item) => item.dataset.id == product.dataset.id)
	
    if(cart.children.length == 0 || !productInCart){
        const newProduct = document.createElement('div');
        newProduct.classList.add('cart__product');
        newProduct.dataset.id = product.dataset.id;
        cart.insertAdjacentElement("beforeend", newProduct);
        img = product.querySelector('.product__image').src;
        newProduct.innerHTML +=`<img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${volume}</div>`;

    } else { 
        const itogVolume = productInCart.querySelector('.cart__product-count');
        itogVolume.textContent = +itogVolume.textContent + +volume;
    }
}
