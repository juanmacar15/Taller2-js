addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let l1 = document.getElementById("num1").value;
            let l2 = document.getElementById("num2").value;

            if((l1 > 0) && (l2 > 0)){
                let area = l1 * l2;
                document.getElementById('res1').innerHTML = 'el area es: ' + area;

            }
            else{
                document.getElementById('res1').innerHTML = 'los lados deben ser positivos :)';
            }

        }
    })
})
