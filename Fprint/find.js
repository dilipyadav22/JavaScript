const cheerio = require('cheerio');

function parseDocToMap(tableRows, $) {
    // I need a map to store the coordinates and characters
    const map = new Map();
    let xMax = 0;
    let yMax = 0;

    // Go through each row of the table
    for (let i = 1; i < tableRows.length; i++) { // Start at 1 to skip the header row
        const row = $(tableRows[i]); // Wrap the row in Cheerio so I can use find
        // Each row should have 3 cells: x, character, y
        const cells = row.find('td'); // Get the cells in this row

        const x = parseInt(cells.eq(0).text()); // First cell is x
        const char = cells.eq(1).text(); // Second cell is the character
        const y = parseInt(cells.eq(2).text()); // Third cell is y

        // Use [x, y] as the key in the map
        const key = [x, y];
        map.set(key, char);

        // Keep track of the biggest x and y
        xMax = Math.max(xMax, x);
        yMax = Math.max(yMax, y);
    }

    // Return the map and the max values
    return { map, xMax, yMax };
}

async function printMessage(docUrl) {
    try {
        const response = await fetch(docUrl);
        const html = await response.text();

        const $ = cheerio.load(html);

        // Find the table inside the #contents div
        const table = $('#contents table');

        // Get all the rows in the table
        const tableRows = table.find('tr');

        console.log("Found " + tableRows.length + " rows in the table");

        const { map: xyMap, xMax, yMax } = parseDocToMap(tableRows, $);
        console.log('xyMap', xyMap);
        console.log('xMax', xMax);
        console.log('yMax', yMax);

        // Create a 2D grid of spaces
        const grid = Array.from({ length: yMax + 1 }, () => Array(xMax + 1).fill(' '));

        // Place characters on grid using xyMap
        for (const [key, char] of xyMap) {
            const [x, y] = key; // Extract x and y from the tuple key
            grid[y][x] = char; // Place the character at the correct position
        }
        
        console.log('grid', grid);

        // Print grid from yMax to 0, and x from 0 to xMax
        console.log('\nSecret Message:\n');
        for (let y = yMax; y >= 0; y--) {
            const row = [];
            for (let x = 0; x <= xMax; x++) {
                row.push(grid[y][x]); // Build the row from x=0 to xMax
            }
            console.log(row.join('')); // Print the row
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

printMessage('https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub');