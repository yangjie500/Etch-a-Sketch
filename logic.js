(function () {
    const startingGridSize = 16;
    const gridContainer = document.querySelector('.grid-container');
    for (let i=1; i<= startingGridSize * startingGridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-child');
        gridContainer.appendChild(div);
    }
    console.log('helol');
})();

function getSliderValue(e) {
    return e.target.value;
}
function getColorHex(e) {
    return e.target.value;
}
function removeChild(gridContainer) {
    let childArr = Array.from(gridContainer.children);
    for (let i of childArr) {
        i.remove(); //or gridContainer.removeChild(i);
    }
}
function makeGrid(e) {
    const gridContainer = document.querySelector('.grid-container');
    removeChild(gridContainer);
    for (let i=1; i<=getSliderValue(e) * getSliderValue(e); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-child');
        gridContainer.appendChild(div);
    } 
    
}


function sketch () {
    const slider = document.querySelector(`input[type='range']`);
    const colorPicker = document.querySelector(`input[type='color']`);
    
    slider.addEventListener('change', makeGrid);
    colorPicker.addEventListener('input', getColorHex);
}

window.onload = sketch();