function logar(){
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value.trim()

    if(!email || !senha){
        alert('Preencha usuário e senha para jogar!');
        return;
    }
    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json()).then(data => {
        //busca a pessoa cujo email e senha estejam corretos

    var usuario = data.find(usuarios => usuarios.email === email && usuarios.senha === senha )
    if(usuario){
            localStorage.setItem('loginLS', email);
            localStorage.setItem('senhaLS', senha);
            window.location.href = "../pages/bemVindo.html";
            console.log('usuario')
    }
        else{
            alert('Usuário ou Senha Incorretos')
    }
})}
