const products = document.querySelectorAll('.product')
const cart = document.querySelector('.cart__products')

products.forEach(item => {
    const value = item.querySelector('.product__quantity-value')
    item.querySelector('.product__quantity-control_dec').onclick = () => {
        if (value.textContent != 1){ value.textContent = value.textContent - 1}
    }

    item.querySelector('.product__quantity-control_inc').onclick = () => {
        value.textContent = +value.textContent + 1
    }

    item.querySelector('.product__add').onclick = () => {
        AddProduct(item)
        value.textContent = 1
    }
})

function AddProduct(product) {
    const volume = product.querySelector('.product__quantity-value').textContent
    const indexProd =  IndexCart(product)

    if(cart.children.length == 0 || indexProd < 0){
        const newProduct = document.createElement('div')
        newProduct.classList.add('cart__product')
        newProduct.dataset.id = product.dataset.id
        cart.insertAdjacentElement("beforeend", newProduct)
        img = product.querySelector('.product__image').src
        newProduct.innerHTML +=`<img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${volume}</div>`

    } else { 
        itogVolume = cart.children[indexProd].querySelector('.cart__product-count')
        itogVolume.textContent = +itogVolume.textContent + +volume  
    }
}

function IndexCart(product){
    ids = product.dataset.id
    for (let i = 0; i < cart.children.length; i++){
        if (cart.children[i].dataset.id == ids){ return i}
    }
    return -1
}
