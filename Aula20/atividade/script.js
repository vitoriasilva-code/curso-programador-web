function analisarClima() {  
    const temperatura = document.getElementById("temperatura").value;
    const temp = parseFloat(temperatura);
    const output = document.getElementById("output");
    const imgClima = document.getElementById("imgClima");

    if (temp === "") { 
        output.innerHTML = "Por favor, insira uma temperatura válida.";
        return;
    }

    if (temp < 0){
       output.innerHTML = "Clima: Congelante. Na mala: Casaco térmico, luvas e toucal.";
       imgClima.src = "https://www.shutterstock.com/shutterstock/photos/2807777427/display_1500/stock-vector-cartoon-winter-clothing-set-including-jacket-hat-scarf-gloves-and-boots-perfect-for-seasonal-2807777427.jpg"
    }
    else if (temp <= 14){
        output.innerHTML = "Clima: Frio. Na mala: Leve casacos grossos e calças.";
        imgClima.src = "https://m.media-amazon.com/images/I/71wGZJmFtTL._AC_SX569_.jpg"
    
    }

     else if (temp <= 25){
        output.innerHTML = "Clima: Agradavel. Na mala: Roupas leves e um casaco leve para noite.";
        imgClima.src = "https://cdn-ileapbh.nitrocdn.com/awswdmxduTjCKQiPPVuNWTjlobpOKWLT/assets/images/optimized/rev-05d30b9/aguiarbuenosaires.com/wp-content/uploads/2020/06/O-que-vestir-em-Buenos-Aires.png"
    
    }

    else{
        output.innerHTML = "Clima: Quente. Na mala: Roupas de banho, óculos de sol e protetor!.";
        imgClima.src = "https://i.pinimg.com/236x/71/7a/4e/717a4e99a80da3454f1844c66401e6f8.jpg"
    
    }

};