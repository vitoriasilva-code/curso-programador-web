const formTemperatura = document.getElementById("formTemperatura");

if (formTemperatura) { 
    formTemperatura.addEventListener("submit", function (event) {
    event.preventDefault();
        // captura as tag
        // verificar numero
            // alterar area resultado
        
    const temperatura = (document.getElementById("temperatura").value);
    const mensagem = document.getElementById("resultadoVisivel");

    if (temperatura >= 34){
        mensagem.textContent = "Quente";
        mensagem.style.color = "red";
    
    }

    else if (temperatura >= 24){
        mensagem.textContent = "Agradevel"
        mensagem.style.color = "green";
        
    
    }

    else if (temperatura >= 14){
        mensagem.textContent = "frio"
        mensagem.style.color = "blue";
    
    }

    else{
        mensagem.textContent = "Invalido"
        mensagem.style.color = "gray";
    
    }

    })
};