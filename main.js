addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let temp = document.getElementById("num1").value;
            let pre = document.getElementById("num2").value;

            if((temp > 100) || (pre > 200)){
                document.getElementById("res1").style.color = "red";
                document.getElementById('res1').innerHTML = 'ALERTAAA';

            }
            else{
                document.getElementById("res1").style.color = "blue";
                document.getElementById('res1').innerHTML = 'NORMAL';
            }

        }
    })
})
