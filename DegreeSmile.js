let ST = 1
for(i = 0; i < 10; i++)
console.log(ST = ST * 2)

const Stepen = function(chislo){
    if (chislo <= 10){
        let b = 1
        for(i = 0; i < chislo; i++)
console.log(b = b * 2)
    }
}
Stepen(10)

       let b = [":)", ":)" + ":)", ':)' + ':)' + ':)', ':)' + ':)' + ':)' + ':)', ':)' + ':)' + ':)' + ':)' + ':)']
        for (let i = 0; i < 5; i++)
console.log(b[i])

let Smile = function(string, num_s){
let b = ''
let count = 0
for (i = 0; i < num_s; i++)
console.log(count++, b = b + string)}
Smile(':)', 5)

const vowel_count = function(string) {
    let vowel = 'aeiouAEIOU'
    let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    let vcount = 0
    let concount = 0
    
    for(let i = 0; i < string.length; i++) {
      if (vowel.indexOf(string[i]) !== -1) {
        vcount++
      } else if (consonants.indexOf(string[i]) !== -1)
      concount++
    }
    console.log('Слово состоит из ' + vcount + ' гласных и ' + concount + ' согласных букв')
  }
  vowel_count('case')
  vowel_count('Case')
  vowel_count('Check-list')


const vowel_count2 = function(string) {
    let vowel = 'aeiouAEIOU'
    let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    let vcount = 0
    let concount = 0
    
    for(let i = 0; i < string.length; i++) {
      if (vowel.includes(string[i])) {
        vcount++
      } else if (consonants.includes(string[i]))
      concount++
    }
    console.log('Слово состоит из ' + vcount + ' гласных и ' + concount + ' согласных букв')
  }
  vowel_count2('case')
  vowel_count2('Case')
  vowel_count2('Check-list')


let Palindrom = function(string){
    let register = string.toUpperCase()
    let characters = register.split('')
    let Palindrom = true;
    for(let i = 0, j = characters.length -1; i < characters.length; i++, j--) {
        if(characters[i] !== characters[j]){
        Palindrom = false
    }
}
    console.log(Palindrom)
}
Palindrom('abba')
Palindrom('Abba')
