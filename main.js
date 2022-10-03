const selecionar = document.querySelector("#selecionarCifra");
const chave = document.querySelector("#chaveIncremento");
const texto = document.querySelector("#texto");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");
const resposta = document.querySelector("#resposta");





codificar.addEventListener("click" ,function (evento) {
  evento.preventDefault()
  resposta.innerHTML = `${btoa(texto.value)}`;
  encriptar()
})


decodificar.addEventListener("click" ,function (evento) {
    evento.preventDefault()
    resposta.innerHTML = `${atob(texto.value)}`;
    desencriptar()
  })
  



  function encriptar() {

    let selected = parseInt(chave.value)
    console.log(selected)

    let texto = document.querySelector("#texto").value;
    let cifraTexto = ""
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let alfabetoCifrado = ''


    alfabetoCifrado = alfabeto
    //reordenar  alfabeto
    alfabetoCifrado = mudaArrey(alfabetoCifrado.split(''), selected).join('')
    //encriptar texto
    cifraTexto = criptarTexto(texto, alfabeto, alfabetoCifrado)
    

    if (cifraTexto == "") {
        resp.innerHTML = `Campo vazio`
    } else {
        resposta.innerHTML = `${cifraTexto} `
    }
    
}



function desencriptar() {
 
    let selected = parseInt(chave.value)
    console.log(selected)

    let texto= document.querySelector("#texto").value;
    let cifraTexto = ""
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let alfabetoCifrado = ''


    alfabetoCifrado = alfabeto
    alfabetoCifrado = mudaArrey(alfabetoCifrado.split(''), selected).join('')

    cifraTexto = criptarTexto(texto, alfabetoCifrado, alfabeto)



    if (cifraTexto == "") {
        resp.innerHTML = `Campo vazio`
    } else {
        resposta.innerHTML = `${cifraTexto} `
    }

}


function mudaArrey(arr, num) {

    return arr.slice(num).concat(arr.slice(0, num))
}



function criptarTexto(texto, alfabeto, alfabetoCifrado) {
    const numArr = []
    const textArr = texto.split("");
    textArr.forEach(el => {
        if (alfabeto.indexOf(el) !== -1) {
            numArr.push(alfabeto.indexOf(el))
        } else {
            numArr.push(el)
        }
    })

    return numArr.map(n => {
        let arr = []
        console.log(numArr)



        if (Number.isInteger(n)) {
            arr = alfabetoCifrado[n]
        } else {
            arr = n
        }
        return arr
    }).join('')

}
