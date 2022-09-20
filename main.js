addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let numero = document.getElementById("num").value;
            if(numero > 0){
                document.getElementById('res').innerHTML = 'el numero es positivo';
            }else if(numero < 0){
                document.getElementById('res').innerHTML = 'el numero es negativo';
            }
        }
    })

    for (let input of document.querySelectorAll("input")) {
        document.querySelector(`[name='${input.name}']`).addEventListener('input', (e) => {
            if (!new RegExp(e.target.pattern).test(e.target.value))
                e.target.setCustomValidity(e.target.title);
            else
                e.target.setCustomValidity("");
        })
    }



})
