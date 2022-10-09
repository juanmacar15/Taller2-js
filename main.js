addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){

            let pro1 = parseInt(prompt("ingrese el valor del 1er producto:"));
            let pro2 = parseInt(prompt("ingrese el valor del 2do producto:"));
            let pro3 = parseInt(prompt("ingrese el valor del 3ro producto:"));
            let pro4 = parseInt(prompt("ingrese el valor del 4to producto:"));
            let pro5 = parseInt(prompt("ingrese el valor del 5to producto:"));
            

            if((pro1 > 0) && (pro2 > 0) && (pro3 > 0) && (pro4 > 0) && (pro5 > 0)){
                let iva1 = 0.19;
                let st = pro1 + pro2 + pro3 + pro4 + pro5;
                let iva2 = st * iva1;
                let tp = st + iva2;

                document.getElementById("res1").innerHTML = 'subtotal ' + st + ' pesos';
                document.getElementById("res2").innerHTML = 'total a pagar '+tp + ' pesos';
                
                
            }
            else{
                document.getElementById("res1").innerHTML = 'el valor de todos los productos debe ser mayor a 0';
            }

        }
    })
})
