const button = document.getElementById('toggleFilter');
const panel = document.getElementById('panelFilters');

button.addEventListener('click', () => {
    panel.classList.toggle('active');
    if (panel.classList.contains('active')) {
        button.innerHTML = '<i class="fa-solid fa-sliders"></i> Hide Filters';
    }
    else {
        button.innerHTML = '<i class="fa-solid fa-sliders"></i> Show Filters';
    }
});


const ratingCheckboxes = document.querySelectorAll('.rating-option input');

ratingCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        if (this.checked) {
            ratingCheckboxes.forEach(other => {
                if (other !== this) {
                    other.checked = false;
                }
            });
        }
    });
});


const minSlider = document.getElementById("minPrice")
const maxSlider = document.getElementById("maxPrice")
const range = document.getElementById("sliderRange")
const minValue = document.getElementById("minValue")
const maxValue = document.getElementById("maxValue")
const maxPrice = 400;
function updateSlider(){
    let min = parseInt(minSlider.value)
    let max = parseInt(maxSlider.value)
    if (min > max-10){
        min = max-10;
        minSlider.value = min;
    }
    if (max < min+10){
        max = min + 10;
        maxSlider.value = max;
    }
    min = Math.max(0, min);
    max = Math.min(maxPrice, max);
    minSlider.value = min;
    maxSlider.value = max;

    minValue.textContent = "$" + min;
    maxValue.textContent = "$" + max;
    const percentMin = (min/(maxPrice+10)) * 100;
    const percentMax = (max/(maxPrice+10)) * 100;
    range.style.left = percentMin + "%";
    range.style.width = (percentMax - percentMin+2.5) + "%";
}
minSlider.addEventListener("input", updateSlider)
maxSlider.addEventListener("input", updateSlider)
updateSlider();



const clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener('click', () => {
    ratingCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    minSlider.value = 0;
    maxSlider.value = 400;
    updateSlider();
});