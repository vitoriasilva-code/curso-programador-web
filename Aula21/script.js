function rodarLoopfor() {
    const listaFor = document.getElementById('listaFor');
    listaFor.innerHTML = "";
    for (let dias = 5; dias >= 1; dias --) {
        const item = document.createElement('li');
        item.innerText = `Faltam ${dias} dias para a viagem! `;
        listaFor.appendChild(item)
    }
    const itemFinal = document.createElement('li');
    itemFinal.innerHTML = "<strong> Chegou o dia! Decolando!</strong>";
    listaFor.appendChild(itemFinal);
}