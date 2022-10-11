addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){

            let n1 = document.getElementById("num1").value;
            let n2 = document.getElementById("num2").value;
            let n3 = document.getElementById("num3").value;
            let n4 = document.getElementById("num4").value;
            let n5 = document.getElementById("num5").value;
            

            let prom = (parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5))/5;

            document.getElementById("res1").innerHTML = 'el promedio de los 5 estudiantes es : '+ prom;
        }
    })
})
