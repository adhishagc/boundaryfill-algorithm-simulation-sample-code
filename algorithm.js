/**
 * Boundary Fill Algorithm Visualizer
 * Simulates the 4-connected seed fill logic.
 */

let isPickerEnabled = false;
let startX = -1;
let startY = -1;
let grid = [];
let maxRows = 0;
let maxCols = 0;
let isDrawing = false;

function resetAll() {
    const table = document.getElementById("grid");
    table.innerHTML = "";
    grid = [];
    startX = -1;
    startY = -1;
    isPickerEnabled = false;
    document.getElementById("status").innerHTML = "No";
    document.getElementById("select").classList.remove("active");
}

function generateGrid() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);
    
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
        alert("Please enter valid dimensions");
        return;
    }

    resetAll();
    maxRows = rows;
    maxCols = cols;
    drawGrid(rows, cols);
}

function togglePicker() {
    isPickerEnabled = !isPickerEnabled;
    const btn = document.getElementById("select");
    const status = document.getElementById("status");
    
    if (isPickerEnabled) {
        btn.classList.add("active");
        status.innerHTML = "Waiting for click...";
    } else {
        btn.classList.remove("active");
        status.innerHTML = startX !== -1 ? "Yes" : "No";
    }
}

async function startFill() {
    if (startX === -1 || startY === -1) {
        alert("Please select a seed point first!");
        return;
    }
    
    // Disable controls during animation
    document.getElementById("fill").disabled = true;
    document.getElementById("submit").disabled = true;
    
    await boundaryFill(startX, startY);
    
    document.getElementById("fill").disabled = false;
    document.getElementById("submit").disabled = false;
}

/**
 * Recursive Boundary Fill Algorithm with animation delay
 */
async function boundaryFill(x, y) {
    if (x < 0 || x >= maxCols || y < 0 || y >= maxRows) return;
    
    const cell = grid[y][x];
    
    // Check if cell is already filled or is a boundary
    if (cell.classList.contains("filling") || cell.classList.contains("boundary")) {
        return;
    }

    // Fill the pixel
    cell.classList.add("filling");
    cell.classList.add("pixel-fill");
    
    // Add a small delay for visualization effect
    await new Promise(resolve => setTimeout(resolve, 50));

    // Recurse to neighbors (4-connected)
    await boundaryFill(x + 1, y);
    await boundaryFill(x - 1, y);
    await boundaryFill(x, y + 1);
    await boundaryFill(x, y - 1);
}

function drawGrid(rows, cols) {
    const table = document.getElementById("grid");

    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        const row = table.insertRow(i);
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell(j);
            grid[i][j] = cell;

            // Handle drawing boundaries
            cell.addEventListener("mousedown", () => {
                if (!isPickerEnabled) {
                    isDrawing = true;
                    toggleBoundary(cell);
                }
            });

            cell.addEventListener("mouseenter", () => {
                if (isDrawing && !isPickerEnabled) {
                    toggleBoundary(cell);
                }
            });

            // Handle seed selection
            cell.addEventListener("click", () => {
                if (isPickerEnabled) {
                    // Clear previous start point
                    if (startX !== -1) {
                        grid[startY][startX].classList.remove("start-point");
                    }
                    
                    startX = j;
                    startY = i;
                    cell.classList.add("start-point");
                    cell.classList.remove("boundary"); // Start point can't be a boundary
                    
                    isPickerEnabled = false;
                    document.getElementById("select").classList.remove("active");
                    document.getElementById("status").innerHTML = "Yes (" + x + "," + y + ")";
                    document.getElementById("status").innerHTML = `Yes (${j}, ${i})`;
                }
            });
        }
    }
}

function toggleBoundary(cell) {
    if (!cell.classList.contains("filling") && !cell.classList.contains("start-point")) {
        cell.classList.toggle("boundary");
    }
}

window.addEventListener("mouseup", () => {
    isDrawing = false;
});

// Initialize default grid
window.onload = generateGrid;
