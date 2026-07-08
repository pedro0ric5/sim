
console.log("imc")

if (imc < 18.5) {
    console.log("abaixo do peso normal")
} else if (imc > 18.5, imc < 24.9) {
    console.log("peso normal")
} else if (imc > 25.0, imc < 29.9) {
    console.log("excesso de peso")
} else if (imc > 30.0, imc < 34.9) {
    console.log("obesidade classe I")
} else if (imc > 35.0, imc < 39.9) {
    console.log("obesidade classe II")
} else if (imc >= 40) {
    console.log("obesidade classe III")
}

function calcularimc() {
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    
    altura = parseFloat(altura)
    peso = parseFloat(peso)
    
    let imc = peso / altura**2
    document.getElementById("resultado-imc").textContent += imc
}


