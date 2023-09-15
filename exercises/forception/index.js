var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception (people, alphabet){
    const splitAlphabet = alphabet.toUpperCase().split("")
    let alphabetPeople = []
    for (let i = 0; i < people.length; i++){
        alphabetPeople.push(people[i])
        for (let j =0; j < splitAlphabet.length; j++){
            alphabetPeople.push(splitAlphabet[j])
    }
        }
        return alphabetPeople
}
console.log (forception(people, alphabet))

