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
        alert("Added!");
    });
});