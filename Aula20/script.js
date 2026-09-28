const formNumero = document.getElementById("formNumero");

if (formNumero) { 
    formNumero.addEventListener("submit", function (event) {
    event.preventDefault();
        // captura as tag
        // verificar numero
            // alterar area resultado
        
    const numero = Number(document.getElementById("numero").value);
    const mensagem = document.getElementById("resultadoVisivel");

    if (numero > 0){
        mensagem.textContent = "Positivo";
        mensagem.style.color = "green";
    
    }

    else if (numero < 0){
        mensagem.textContent = "Negativo"
        mensagem.style.color = "red";
    
    }

    else if (numero === 0){
        mensagem.textContent = "Neutro"
        mensagem.style.color = "blue";
    
    }

    else{
        mensagem.textContent = "Invalido"
        mensagem.style.color = "gray";
    
    }

    })
};