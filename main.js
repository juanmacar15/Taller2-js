addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){

            let n1 = document.getElementById("num1").value;
            let n2 = document.getElementById("num2").value;
            
            if(n1 >= n2){
                let resta = parseInt(n1)-parseInt(n2);
                document.getElementById("res1").innerHTML = 'la resta es: '+ resta;
            }
            else{
                document.getElementById("res1").innerHTML = 'el primer numero debe ser mayor que el segundo :v';
            }

            
        }
    })
})
