let universe_size = 100;
let htmlElements;
let cells;
let DEAD = 0;
let ALIVE = 1;

function createField() {
    htmlElements = [];
    cells = [];
    let table = document.getElementById('field');
    for (let y = 0; y < universe_size; y++) {
        let tr = document.createElement('tr');
        let tdElements = [];
        cells.push(new Array(universe_size).fill(DEAD));
        htmlElements.push(tdElements);
        table.appendChild(tr);
        for (let x = 0; x < universe_size; x++) {
            let td = document.createElement('td');
            tdElements.push(td);
            tr.appendChild(td);
        }
    }
}

function draw() {
    for (let y = 0; y < universe_size; y++) {
        for (let x = 0; x < universe_size; x++) {
            htmlElements[y][x].setAttribute('class', 'cell ' + (cells[y][x] == 1 ? 'filled' : 'empty'));
        }
    }
}

function countNeibhours(x, y) {
    let count = 0;
    for (dy = -1; dy <= 1; dy++) {
        for (dx = -1; dx <= 1; dx++) {
            let nx = (x + dx + universe_size) % universe_size, ny = (y + dy + universe_size) % universe_size;
            count = count + cells[ny][nx];
        }
    }
    return count - cells[y][x];
}

function newGeneration() {
    let newCells = [];
    for (let i = 0; i < universe_size; i++) {
        newCells.push(new Array(universe_size).fill(DEAD));
    }
    for (let y = 0; y < universe_size; y++) {
        for (let x = 0; x < universe_size; x++) {
            let neibhours = countNeibhours(x, y);
            if (cells[y][x] == DEAD && neibhours == 3) {
                newCells[y][x] = ALIVE;
            }
            if (cells[y][x] == ALIVE && (neibhours == 2 || neibhours == 3)) {
                newCells[y][x] = ALIVE;
            }
        }
    }
    cells = newCells;
    draw();
}

function init() {
    createField();
    for (let i = 0; i < Math.floor(universe_size * universe_size * 0.3); i++) {
        let x, y;
        do {
            x = Math.floor(Math.random() * universe_size), y = Math.floor(Math.random() * universe_size);
            if (cells[y][x] == DEAD) {
                cells[y][x] = ALIVE;
                break;
            }
        } while (true);
    }
    draw();
    // setInterval(newGeneration, 500);
}

init();