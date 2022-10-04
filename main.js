addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let a = document.getElementById("num1").value;
            let b = document.getElementById("num2").value;
            let c = document.getElementById("num2").value;
            let d = document.getElementById("num2").value;

            let a1 = a%2;
            let b1 = b%2;
            let c1 = c%2;
            let d1 = d%2;

            if((a1 == 0) && (b1 == 0) && (c1 == 0) && (d1 == 0)){
                let suma = a + b + c + d;
                document.getElementById("res1").innerHTML = 'la suma es: '+suma;

            }
            else{
                let mult = a * b * c * d;
                document.getElementById("res2").innerHTML = 'la multiplicacion es : '+mult;
            }

        }
    })
})
