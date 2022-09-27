addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let n1 = document.getElementById("num1").value;
            let n2= document.getElementById("num2").value;
            let n3 = document.getElementById("num3").value;

            if((n1 > n2) && (n1 > n3) && (n2 > n3)){
                document.getElementById('res1').innerHTML = n1 + ' es el mayor';
                document.getElementById('res2').innerHTML = n3 + ' es el menor';
            }
            else if((n1 > n2) && (n1 > n3) && (n3 > n2)){
                document.getElementById('res1').innerHTML = n1 + ' es el mayor';
                document.getElementById('res2').innerHTML = n2 + ' es el menor';
            }
            else if((n2 > n1) && (n2 > n3) && (n3 > n1)){
                document.getElementById('res1').innerHTML = n2 + ' es el mayor';
                document.getElementById('res2').innerHTML = n1 + ' es el menor';
            }
            else if((n2 > n1) && (n2 > n3) && (n1 > n3)){
                document.getElementById('res1').innerHTML = n2 + ' es el mayor';
                document.getElementById('res2').innerHTML = n3 + ' es el menor';
            }
            else if((n3 > n1) && (n3 > n2) && (n1 > n2)){
                document.getElementById('res1').innerHTML = n3 + ' es el mayor';
                document.getElementById('res2').innerHTML = n2 + ' es el menor';
            }
            else if((n3 > n1) && (n3 > n2) && (n2 > n1)){
                document.getElementById('res1').innerHTML = n3 + ' es el mayor';
                document.getElementById('res2').innerHTML = n1 + ' es el menor';
            }
            else{
                document.getElementById('res1').innerHTML = ' hay numeros iguales';
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
