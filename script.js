const botao  = document.querySelector('#countButton');
const divLetras = document.querySelector('#letras');
const divPalavras = document.querySelector('#palavras');
const inputTexto = document.querySelector('#textInput');
const reset = document.querySelector('#reset');


function contaLetras(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(/[^a-z'\s]+/g, "");
    
    let contLetras = {};
    
    for(i=0;i<texto.length;i++){
        
        if(texto[i] != " "){
            if(contLetras[texto[i]] === undefined){
                contLetras[texto[i]] = 1;
            }else{
                contLetras[texto[i]]++;
            }
        }
        
    }

    return contLetras;
}

function contaPalavras(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(/[^a-z'\s]+/g, "");
    let palavras = texto.split(' ');

    let contPalavras = {}

    for(i=0; i<palavras.length; i++){
         
        if(contPalavras[palavras[i]] === undefined){
            contPalavras[palavras[i]] = 1;
        }else{
            contPalavras[palavras[i]]++;
        }
    }

    return contPalavras;
}

botao.addEventListener('click', function(){
    const texto = inputTexto.value;
    let contLetras = contaLetras(texto);
    let contPalavras = contaPalavras(texto);
    divLetras.innerText = "";
    divPalavras.innerText = "";

    for(let letra in contLetras){
        const span = document.createElement('span');
        const resultado = `"${letra}": ${contLetras[letra]} `;
        span.innerText = resultado
        divLetras.appendChild(span);
    }

    for(let palavra in contPalavras){
        const span = document.createElement('span');
        const resultado = `"${palavra}" : ${contPalavras[palavra]} `;
        span.innerText = resultado;
        divPalavras.appendChild(span);
    }

});

reset.addEventListener('click', function(){
    inputTexto.value = "";
    divLetras.innerText = "";
    divPalavras.innerText = "";
})