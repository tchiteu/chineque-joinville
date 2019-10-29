function validaForm() {
    if(!document.getElementById("checkboxFa").checked){
        alert("Preencha o campo de inscrição!");
        return false;
    }

    return true;
}