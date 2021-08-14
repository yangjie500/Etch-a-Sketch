(function () {
    const startingGridSize = 16;
    const gridContainer = document.querySelector('.grid-container');
    for (let i=1; i<= startingGridSize * startingGridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-child');
        gridContainer.appendChild(div);
    }
})();

function getSliderValue(e) {
    return e.target.value;
}

function changeColorHex(e) {
    const hexCode = e.target.value;
    const gridChildren = document.querySelectorAll('.grid-child');
    for (const i of gridChildren) {
        i.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = hexCode;
        })
    }
}

function updateGridCss(gridContainer, dim) {
    gridContainer.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    console.log(typeof dim);
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
    updateGridCss(gridContainer, getSliderValue(e));
    for (let i=1; i<=getSliderValue(e) * getSliderValue(e); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-child');
        gridContainer.appendChild(div);
    } 
    
}

function generateRainbow() {
    x = Math.floor(Math.random()* 360);
    y = Math.floor(Math.random()* 100);
    z = Math.floor(Math.random()* 100);
    return [x, y, z];
    
}

function pickOneMode(e) {
    const gridChildren = document.querySelectorAll('.grid-child');
    className = e.target.classList[0];
    if (className === 'to-black') {
        for (const i of gridChildren) {
            i.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = `#000`;
            });
        };

    } else if (className === 'to-rainbow') {
        for (const i of gridChildren) {
            i.addEventListener('mouseover', function(e) {
                let color = generateRainbow()
                e.target.style.backgroundColor = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
            })
        };
    } else {
        for (const i of gridChildren) {
            i.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = `#fff`;
            })
        }
    }
}

function displaySliderNumber(e) {
    const display = document.querySelector('.grid-number-display');
    display.textContent = `${e.target.value} x ${e.target.value}`;
    //display.style.left = 
    //console.log(display.style.left);
}


function sketch () {
    const slider = document.querySelector(`input[type='range']`);
    const colorPicker = document.querySelector(`input[type='color']`);
    const buttons = document.querySelectorAll("button");
   
    slider.addEventListener('input', displaySliderNumber);
    slider.addEventListener('change', makeGrid);
    colorPicker.addEventListener('input', changeColorHex);
    for (const i of buttons) {
        i.addEventListener('click', pickOneMode);
    }
    


}

window.onload = sketch();