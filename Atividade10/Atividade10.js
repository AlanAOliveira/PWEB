function calculaIMC() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    
    let imc = (peso/Math.pow(altura,2)).toFixed(2)
    let result = {
        "imc": 18.5,
        "classificacao": "Magreza",
        "obesidade": 0
    }


    tabela = [
    {
        "imc": 24.9,
        "classificacao": "Normal",
        "obesidade": 0
    },
    {
        "imc": 29.9,
        "classificacao": "Sobrepeso",
        "obesidade": 1
    },
    {
        "imc": 39.9,
        "classificacao": "Obesidade",
        "obesidade": 2
    },
    {
        "imc": 40,
        "classificacao": "Obesidade Grave",
        "obesidade": 3
    }
    ]

    tabela.forEach(element => {
        if(imc > element.imc){
            result = element
        }        
    });

    document.getElementById("result").innerText = `IMC = ${imc} classificação = ${result.classificacao}
    grau de obesidade = ${result.obesidade}`
}