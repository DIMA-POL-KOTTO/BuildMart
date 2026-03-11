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
        minSlider.value = min - 10;
        max = min-10;
    }
    if (max < min+10){
        maxSlider.value = max + 10;
        min = max + 10;
    }
    minValue.textContent = "$" + min;
    maxValue.textContent = "$" + max;
    const percentMin = (min/maxPrice) * 100;
    const percentMax = (max/maxPrice) * 100
    range.style.left = percentMin + "%";
    
}
minSlider.addEventListener("input", updateSlider)
maxSlider.addEventListener("input", updateSlider)
updateSlider();