const buttons = document.querySelectorAll(".add-to-cart")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".product-card");
        const product = {
            id: card.dataset.id,
            name: card.dataset.name,
            category: card.dataset.category,
            price: parseFloat(card.dataset.price),
            img: card.dataset.img,
            count: 1
        };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.count++;
        }
        else {
            cart.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter();
        alert("Added!");
    });
    
});

function updateCartCounter() {
    const cartCount = document.querySelector(".count-products");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
    if (cartCount) {
        if (totalCount > 0) {
            cartCount.textContent = totalCount;
            cartCount.style.display = "block";
        }
        else {
            cartCount.style.display = "none";
        }
    }
}

function showToast(mes){
    

}

document.addEventListener('DOMContentLoaded', updateCartCounter);