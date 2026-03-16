const emptyCart = document.querySelector(".cart-empty")
const cartContent = document.querySelector(".cart-content")
const cartItems = document.getElementById("cartItems")
let cart = JSON.parse(localStorage.getItem("cart")) || []
if (cart.length === 0){
    emptyCart.style.display = "block";
    cartContent.style.display = "none";
}
else {
    emptyCart.style.display = "none";
    cartContent.style.display = "block";
    showCartProducts();
}

function showCartProducts(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if (cart.length === 0){
        emptyCart.style.display = "block";
        cartContent.style.display = "none";
        return;
    }
    cartItems.innerHTML = "";
    let subtotalCost = 0;
    cart.forEach(product => {
        const totalCost = product.price * product.count;
        subtotalCost += totalCost;
        cartItems.innerHTML += `
        <div class="cart-item">
            <div class="cart-product">
                <img src="${product.img}">
                <div class="cart-product-info">
                    <h3>${product.name}</h3>
                    <p>${product.category}</p>
                    
                </div>
            </div>
            <div class="cart-price">$${product.price}</div>
            <div class="cart-quantity">
                <button onclick="changeQuantity('${product.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                <p>${product.count}</p>
                <button onclick="changeQuantity('${product.id}', +1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="cart-total">
                <p>$${totalCost.toFixed(2)}</p>
                <button onclick="deleteProduct('${product.id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>
        `;
    });
    updateSummary(subtotalCost)
}

function updateSummary(subtotal) {
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}
