addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let tra = document.getElementById("num1").value;
            let h = document.getElementById("num2").value;

            if( tra == "p" || tra == "P"){
                let form = h * 20000;
                document.getElementById("res1").innerHTML = 'su pago es de '+form + ' pesos';

            }
            else if(tra == "a" || tra == "A"){
                let form = h * 10000;
                document.getElementById("res1").innerHTML = 'su pago es de '+form + ' pesos';
            }
            else{
                document.getElementById("res1").innerHTML = 'la letra ingresada no es correcta';
            }

        }
    })
})
