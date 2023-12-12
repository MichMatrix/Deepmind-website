document.getElementById("loginButton").addEventListener("click", function() {
    // Exibe o spinner antes do alerta
    document.getElementById("spinner").style.display = "inline-block";

    //  Alerta para 1 segundo usando setTimeout como exemplo (você pode ajustar conforme necessário)
    setTimeout(function() {
        // Esconde o spinner
        document.getElementById("spinner").style.display = "none";

        // Exibe o alerta
        alert("Usuário não encontrado");
    }, 1000);
});