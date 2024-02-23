// let motTaperOk = false

// const motAppli = "Salut"
// // prompt affiche une popup ou l'utilisateur peut saisir du text
// let motUtilisateur = prompt("Entrez un mot : " + motAppli)


// if (motUtilisateur === motAppli){
//     document.write("Bravo, vous avez correctement tapé le mot ")
// } else {
//     document.write("Error")
// }


let listeMots = ["Cachalot", "Pétunia", "Serviette"]

let listePhrases = ["Pas de panique", "La vie", "Merci pour le poisson"]

let score = 0

let MotUser = prompt("Ecrire le mot : " + listeMots[1])

let PhraseUser = prompt("Ecrire le phrase :" + listePhrases[1])

let RepUser = prompt("Tu veut un mot ou une pharese ?")

if (RepUser === "mot"){
    if (listeMots.includes(MotUser)){
        score++
        document.write(score)
    } else {document.write("error")}
}

if (RepUser === "pharese"){
    if (listePhrases.includes(MotUser)){
        score++
        document.write(score)
    } else {document.write("error")}
}
