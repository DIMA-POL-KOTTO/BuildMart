const emptyCart = document.querySelector(".cart-empty")
const cartContent = document.querySelector(".cart-content")
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
    
}
