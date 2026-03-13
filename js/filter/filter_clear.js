const clearBtn = document.getElementById("clearBtn")
const clearBtn2 = document.getElementById("clearBtn2")

function clearFilters(){
    ratingCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    minSlider.value = 0;
    maxSlider.value = 400;
    updateSlider();
    products.forEach(product => {
        product.style.display = 'block';
    });
};

clearBtn.addEventListener('click', clearFilters)
clearBtn2.addEventListener('click', clearFilters)

//разобраться со второй кнопкой