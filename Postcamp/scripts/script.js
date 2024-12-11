function verificar() {
    const entradaElement = document.getElementById("ui");
    const entrada = entradaElement.value.trim().toLowerCase();
    let phm = "Pesquisar..."
    
    if (entrada === "javascript" || entrada === "js") {
        entradaElement.placeholder = phm;
        js();
    } else if (entrada === "Boumns") {
        entradaElement.placeholder = phm;
        alert("Boumns foi detectado.");
    } else if (entrada === "") {
        entradaElement.placeholder = ">:(";
    } else if (entrada === "r") {
        entradaElement.placeholder = phm;
        r();
    } else {
        entradaElement.placeholder = phm;
        const mensagem = `"${entrada}" não é reconhecido pelo sistema. Verifique se há um erro de digitação.`;
        alert(mensagem);
        console.log(mensagem);
    }
}

function checarEnter(event) {
    if (event.key === "Enter") {
        verificar();
    }
}