const btnSend = document.getElementById("btn-send");
const usuarios = [
    {name:"Alfonseca",passwd:"12345"}
]
btnSend.onclick=(event)=>{
    const usuario = document.getElementById("username").value;
    const passwd = document.getElementById("passwd").value;
    document.getElementById("username").value="";
    document.getElementById("passwd").value="";
    event.preventDefault();
    if(usuario==""){
        alert("No introdujo un nombre de usuario valido, intente de nuevo")
    }
    else if(passwd==""){
        alert("No introdujo una contraseña valida, intente de nuevo")
    }
    else{
        usuarios.map((user)=>{
            if(usuario==user.name){
                if(passwd==user.passwd){
                    alert("Bienvenido "+user.name)
                }
                else{
                    alert("Contraseña incorrecta");
                }
            }
            alert("Usuario no encontrado");
        })
    }
}