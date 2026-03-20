const promoInput = document.getElementById("promoInput")
const promoHint = document.querySelector(".promoHint")
let isApplied = false;

promoInput.addEventListener("input", () => {
    if (!isApplied){
        if (promoInput.value){
            promoHint.style.display = "block";
        }
        else {
            promoHint.style.display = "none";
        }
        if (promoInput.value === "BUILD10") {
            promoHint.style.display = "none";
        }
    }
    else {
        promoHint.style.display = "block";
    }
})

const promoBtn = document.getElementById("promoBtn")
const discountLine = document.querySelector(".discount-line")


promoBtn.addEventListener("click", () => {
    if (promoInput.value === "BUILD10"){
        isApplied = true;

        const subtotal = parseFloat(document.getElementById("subtotal").textContent.replace(/[^0-9.]/g, ''));
        const discount = subtotal * 0.1;
        
        window.applyPromo(discount);
        
        promoHint.style.color = "green";
        promoHint.textContent = "✓ Promo code applied! You saved 10%";
        promoHint.style.display = "block";
    }
})

