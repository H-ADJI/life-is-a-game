let game_state = false;
function gen_table(size) {
    const universe_table = document.querySelector(".universe table");
    const cell = "<td class='dead'></td>"
    const row = `
            <tr>
                ${cell.repeat(size)}
            </tr>
                `;
    const table = row.repeat(size)
    universe_table.innerHTML = table;

};
const play_button = document.querySelector("#play-btn");
const pause_button = document.querySelector("#pause-btn");
const reset_button = document.querySelector("#reset-btn");
play_button.addEventListener("click", () => game_state = true);
pause_button.addEventListener("click", () => game_state = false);
pause_button.addEventListener("click", () => {
    game_state = false;
    const cells = document.querySelectorAll("tr .alive");
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('alive');
        cells[i].classList.add('dead');
    }
});

gen_table(150);
function render() {
    while (game_state == true) {
        // logic
    }
};
