function verificar() {
    const entradaElement = document.getElementById("ui");
    const entrada = entradaElement.value.trim().toLowerCase();
    let phm = "Pesquisar..."
    
    if (entrada.includes("bat") || entrada.includes("cm")) {
        entradaElement.placeholder = phm;
        batch();
    } else if (entrada.includes("c+") || entrada.includes("cp")) {
        entradaElement.placeholder = phm;
        cpp();
    } else if (entrada.includes("c")) {
        entradaElement.placeholder = phm;
        c();
    } else if (entrada.includes("html") || entrada.includes("linguagem de marcação de hipertexto")) {
        entradaElement.placeholder = phm;
        html()
    } else if (entrada.includes("js") || entrada.includes("javascript")) {
        entradaElement.placeholder = phm;
        js()
    } else if (entrada === "") {
        entradaElement.placeholder = ">:(";
    } else if (entrada === "css" || entrada === "cs") {
        entradaElement.placeholder = phm;
        css()
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