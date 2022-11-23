window.addEventListener("load", function(event) {
    var cookies = document.cookie;
    console.log(cookies);
    if(cookies==""){
        this.alert("Debe iniciar sesión primero");
        this.window.location="/login.html";
    }
    else{
        var data = cookies;
        console.log(data);
        var user = cookies.split(";")[0];
        user=user.split("=")[1];
        console.log(user);
        var passwd=cookies.split(";")[1];
        passwd=passwd.substring(1);
        passwd=passwd.split("=")[1];
        console.log(passwd);
        this.document.getElementById("usuario").innerText="Bienvenido "+user;
    }
  });
//ELIMINAR COOKIES
//document.cookie.split(";").forEach(function(c) {
  //      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    //});