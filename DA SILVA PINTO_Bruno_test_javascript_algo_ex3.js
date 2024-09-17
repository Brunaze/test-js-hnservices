// Variable qui garde le numero de ligne, colonne et region qui ont des erreurs
let errors = [[],[],[]];

// Variable qui garde les régions avec erreur
let regions = []


// Fonction qui verifie les erreurs en ligne du tableau donné en paramètre
function verifyLineErrors(to_check){
    
    for (let i=0; i<9; i++){
        if (verifyTable(to_check[i]) === false){
            errors[0].push(i);
        }   
    }
    
}

function verifyColumnErrors(to_check){
    
    for (let i=0; i<9; i++){
        let column = [];
        for (let j=0; j<9; j++){
            column.push(to_check[j][i]);
        }
        
        if (verifyTable(column) === false){
            errors[1].push(i);
        }  
    }
}

function verifyRegionErrors(to_check){
    
    let countRegion = 1;
    for (lineR = 0; lineR < 3; lineR++){
        for (columnR = 0; columnR < 3; columnR++){
            valueRegion = [];
            
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    valueRegion.push(to_check[lineR * 3 + i][columnR * 3 + j]);
                }
            }
            
            if (verifyTable(valueRegion) === false){
                errors[2].push(countRegion);
                regions.push([valueRegion]);
            } 
            
            countRegion++;
        }
    }
}

// Fonction qui ecrit le tableau d'erreurs html en fonction des erreurs dans la variable errors
function writeErrorTable(errors, to_check){

    // Verifie que l'array errors ait des valeurs
    const hasValues = errors.some( function (a) { return a.length });
    
    if (hasValues){
        
        let errorHtml = "<table border=1>";
        for (let i=0; i<3; i++){
            for (let j = 0; j < errors[i].length; j++) {
                
                // Recupere les indices de errors et itère sur les éléments pour afficher le tableau des erreurs html
                switch (i) {
                    case 0:
                        errorHtml += `<tr><td> Line ${errors[i][j]+1} incorrect </td>`;
                        for (let index = 0; index < 9; index++) {
                            errorHtml += `<td>` + to_check[errors[i][j]][index] + `</td>`;
                        }
                        errorHtml += `</tr>`
                        break;
                    case 1:
                        errorHtml += `<tr><td> Column ${errors[i][j]+1} incorrect </td>`;
                        for (let index = 0; index < 9; index++) {
                            errorHtml += `<td>` + to_check[index][errors[i][j]] + `</td>`;
                        }
                        errorHtml += `</tr>`
                        break;
                    case 2:
                        errorHtml += `<tr><td> Region ${errors[i][j]} incorrect </td>`;
                        for (let x = 0; x < regions.length; x++) {
                            let arr = String(regions[x]).split(",");
                            for (let index = 0; index < 9; index++) {
                                errorHtml += `<td>` + arr[index] + `</td>`;
                            }     
                        }
                        errorHtml += `</tr>`
                        break;

                    default:
                        break;
                }
                   
            }
        }
        "</table>"
        
        document.getElementById('errorSudoku').innerHTML = errorHtml;
        
    } else{
        document.getElementById('errorSudoku').innerHTML = "The table is Correct";
    }
}