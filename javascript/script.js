function validaForm() {
    var nome = document.getElementById('nome');
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    
    if(!expRegNome.test(nome.value)) {
        alert("Preencha o campo Nome corretamente.");
        nome.focus();
        return false;
    }

    var fone = document.getElementById('telefone');
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    
    if(!expRegFone.test(fone.value)) {
        alert("Preencha o campo Fone corretamente.");
        fone.focus();
        return false;
    }

    if(!document.getElementById("checkboxFa").checked){
        alert("Preencha o campo de inscrição!");
        return false;
    }

    return true;
}