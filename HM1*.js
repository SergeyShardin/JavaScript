let age_2 = 18, age_3 = 60;
const Fech = function(age){
// if (age && !isNaN(age)) {
//     console.log(age)
// if (age < age_2){
//      console.log("You don’t have access cause your age is " + age + " It’s less than " + age_2)
// } else if(age >=  age_2&&age < age_3){
//     console.log("Welcome !")
// } else if(age > age_3){
//     console.log("Keep calm and look Culture channel")
// } 
// else{console.log("Technical Work")}
// } else {console.log("NaN")}
// }

if (age && !isNaN(age)) {
    alert(age)
if (age < age_2){
    alert("You don’t have access cause your age is " + age + " It’s less than " + age_2)
} else if(age >=  age_2&&age < age_3){
    alert("Welcome !")
} else if(age > age_3){
    alert("Keep calm and look Culture channel")
} 
else{alert("Technical Work")}
} else {alert("NaN")}
}
// Fech(17)
// Fech(18)
// Fech(61)
// Fech(60)
// Fech('fich')
// Fech('')
// Fech(0)
// Fech(NaN)

let TestBrowser = prompt('your values')
Fech(TestBrowser)
