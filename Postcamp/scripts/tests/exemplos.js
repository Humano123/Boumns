function fundocor() {
    let body = document.getElementById("body");
    if (body) {
        body.style.backgroundColor = "red";
    }
}

function textocor() {
    let body = document.getElementById("body");
    if (body) {
        body.style.color = "red";
    }
}

function bordacor() {
    let body = document.getElementById("body");
    if (body) {
        body.style.border = "2px solid red";
    }
}

function tamanho() {
    let body = document.getElementById("body");
    if (body) {
        body.style.scale = "0.5";
    }
}

function fontetamanho() {
    let body = document.getElementById("body");
    if (body) {
        body.style.fontSize = "5vh";
    }
}

function fonte() {
    let body = document.getElementById("body");
    if (body) {
        body.style.fontFamily = "monospace";
    }
}

function animacao() {
    const body = document.body;
    const animationName = 'rotateBody';
    
    // Cria os keyframes
    const keyframes = `
        @keyframes ${animationName} {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
    
    // Adiciona os keyframes ao documento
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
    
    // Aplica a animação ao body
    body.style.animation = `${animationName} 2s linear infinite`;
    verificarConfirmacao();
}

// Função para parar a animação
function pararAnimacao() {
    document.body.style.animation = 'none';
}

// Função que verifica confirmação do usuário após 3 segundos
function verificarConfirmacao() {
    setTimeout(() => {
        const continuar = confirm("Deseja continuar a animação?");
        if (!continuar) {
            pararAnimacao();
        }
    }, 3000);
}

