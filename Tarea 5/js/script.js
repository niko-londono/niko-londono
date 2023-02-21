// formulario
function captura()
{
    var nombre = document.getElementById("username").value;
    var contrasena = document.getElementById("password").value;

    if(nombre == "")
    {
        alert("No deje campos vacios");
        document.getElementById("username").focus();
    }
    else if (contrasena == "")
    {
        alert("Digite una contraseña");
        document.getElementById("password").focus();
    }
    else
    {
        console.log("username: "+nombre+" "+"password: "+contrasena);
        document.getElementById("username").value="";
        document.getElementById("password").value=""; 
        alert("el usuario y contraseña han sido agregados en la consola!");
    }    
}

// boton calcular
function calcularNota()
{
    var nota1 = document.getElementById("numero1").value;
    var nota2 = document.getElementById("numero2").value;
    var nota3 = document.getElementById("numero3").value;
    var respuesta;

    if(nota1 == "" || nota2 == "" || nota3 == "")
    {
        alert("No dejes campos vacios");
    }
    else
    {
        //nota2
        if(nota1 < 60)
        {
            document.getElementById("programacion").style.background = "red";
        }
        else if(nota1 < 90)
        {
            document.getElementById("programacion").style.background = "yellow";
        }
        else
        {
            document.getElementById("programacion").style.background = "green";
        }

        //nota2
        if(nota2 < 60)
        {
            document.getElementById("base-de-datos").style.background = "red";
        }
        else if(nota2 < 90)
        {
            document.getElementById("base-de-datos").style.background = "yellow";
        }
        else
        {
            document.getElementById("base-de-datos").style.background = "green";
        }

        //nota3
        if(nota3 < 60)
        {
            document.getElementById("Matematicas").style.background = "red";
        }
        else if(nota3 < 90)
        {
            document.getElementById("Matematicas").style.background = "yellow";
        }
        else
        {
            document.getElementById("Matematicas").style.background = "green";
        }
    }

    respuesta = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;
    document.getElementById("promedio-total").innerHTML = parseInt(respuesta);
}

// boton resetear
function resetear()
{
    var nota1 = document.getElementById("numero1").value;
    var nota2 = document.getElementById("numero2").value;
    var nota3 = document.getElementById("numero3").value;

    if(nota1 != "" || nota2 != "" || nota3 != "")
    {
        document.getElementById("programacion").style.background = "#171717";
        document.getElementById("base-de-datos").style.background = "#171717";
        document.getElementById("Matematicas").style.background = "#171717";

        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("numero3").value = "";
        document.getElementById("promedio-total").value = "";
    }
}

// loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.addEventListener("animationend", () => {
      document.body.removeChild(loader);
    });
  });