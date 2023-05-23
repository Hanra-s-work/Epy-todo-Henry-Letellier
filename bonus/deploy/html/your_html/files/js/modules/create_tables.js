function createHTMLTable(ID, jsonData) {
    const tableContainer = document.getElementById(ID);

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table');

    // Create table header row
    const headerRow = document.createElement('tr');
    Object.keys(jsonData[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows with data
    jsonData.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    // Append the table to the container
    tableContainer.appendChild(table);
}

function createHTMLTableFromJSON(ID, jsonData) {
    const tableContainer = document.getElementById(ID);

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table');

    // Create table header row
    const headerRow = document.createElement('tr');
    Object.keys(jsonData).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table row with data
    const row = document.createElement('tr');
    Object.values(jsonData).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    });
    table.appendChild(row);

    // Append the table after the specified element
    tableContainer.appendChild(table);
}


export {
    createHTMLTable,
    createHTMLTableFromJSON
}

window.createTable = {
    createHTMLTable,
    createHTMLTableFromJSON
}
