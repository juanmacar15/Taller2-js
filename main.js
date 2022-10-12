addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){

            let letra = document.getElementById("num1").value;
            
            if(letra == "a" || letra == "A"){
                let precio = parseInt(prompt('ingrese el precio del producto'));
                let des = precio * 0.10;
                let ptotal = precio - des;
                document.getElementById("res1").innerHTML = 'total: $'+ ptotal + ' pesos';
            }
            else if(letra == "b" || letra == "B"){
                let precio = parseInt(prompt('ingrese el precio del producto'));
                let des = precio * 0.15;
                let ptotal = precio - des;
                document.getElementById("res1").innerHTML = 'total: $'+ ptotal + ' pesos';
            }
            else if(letra == "c" || letra == "C"){
                let precio = parseInt(prompt('ingrese el precio del producto'));
                let des = precio * 0.20;
                let ptotal = precio - des;
                document.getElementById("res1").innerHTML = 'total: $'+ ptotal + ' pesos';
            }
            else{
                document.getElementById("res1").innerHTML = 'la letra que ingresas no es valida';
            }

            /*
            if(n1 >= n2){
                let resta = parseInt(n1)-parseInt(n2);
                document.getElementById("res1").innerHTML = 'la resta es: '+ resta;
            }
            else{
                document.getElementById("res1").innerHTML = 'el primer numero debe ser mayor que el segundo :v';
            }
            */
            
        }
    })
})
