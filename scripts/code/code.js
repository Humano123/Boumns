function executarJS() {
    let jss = document.getElementById("codigoJs").value;
    eval(jss);
}

function executarENTERjs(event) {
    if (event.key === "Enter") {
        executarJS();
    }
}
