// Initialise la grille 9x9
let to_verify = new Array(9);
for (let i=0; i<9; i++){
    to_verify[i]= new Array(9);
}

// Fonction qui peuple la grille avec le tableau donné en passant de une dimension a deux dimensions pour la verification
function fillTable(table_digits) {
    for (let i=0, tableLength = table_digits.length; i<tableLength; i++){
        let row = table_digits[i].split(' ');
        for (let j=0; j<tableLength; j++) {
            to_verify[i][j] = parseInt(row[j]);
        }
    }
}

// Fonction qui affiche le contenu de la table en html
function displayTable(){
    let tableHtml = "<table border=1>";

    // Parcours et ecris le tableau html de la grille à vérifier
    for (let i=0, tableLength = to_verify.length; i<tableLength; i++){
        tableHtml += "<tr>";
        for (let j=0; j<tableLength; j++){
            tableHtml += "<td>" + to_verify[i][j] + "</td>";
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";

    document.getElementById('tableSudoku').innerHTML = tableHtml;
}

