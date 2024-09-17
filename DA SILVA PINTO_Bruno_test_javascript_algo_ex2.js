// Fonction qui prends en paramètre un tableau de 9 éléments

function verifyTable(table){

    // Verifie la taille du tableau en entrée
    if (table.length != 9){
        return false;
    }

    for (let i=0; i<9; i++){

        // Verifie si c'est un chiffre
        if (!isNumber(table[i])){
            return false;
        }

        // Verifie si il y a des doublons
        for (let j=i+1; j<9; j++){
            if (table[i] == table[j]){
                return false;
            }
        }
    }

    return true;
}

// Fonction qui verfie si cést un nombvre entre 1 et 9
function isNumber(int){
    if (typeof int != 'number' || int < 1 || int > 9){
        return false;
    } 
    return true;
}