addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let letra = document.getElementById("num1").value;

            if(letra =="t"){
                let b = parseInt(prompt("ingrese la base:"));
                let h = parseInt(prompt("ingrese la altura:"));
                let at = b*h/2;
                document.getElementById('res1').innerHTML = 'el area es: ' + at;

            }
            else if(letra =="c"){
                let r = parseInt(prompt("ingrese el radio:"));
                const pi =3.1416;
                let ac = pi*r*r;
                document.getElementById('res1').innerHTML = 'el area es: ' + ac;
            }
            else{
                document.getElementById('res1').innerHTML = 'la letra ingresada no es valida';
            }

        }
    })
})
