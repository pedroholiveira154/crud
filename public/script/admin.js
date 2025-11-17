function admin(){
    var senha = document.getElementById('senhaAdmin').value.trim()

    if(senha == "1234"){
        window.location.href = "../pages/admin.html"
    }else(
        alert("senha errada")
    )
}

function logout(){
    localStorage.removeItem('senha')
    localStorage.removeItem('email')
    window.location.href = "../index.html"
}