addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let pago = document.getElementById("num1").value;

            if(pago > 130000){
                let desc = pago * 0.15;
                let total = pago - desc;
                document.getElementById("res1").innerHTML = 'descuento del 15%';
                document.getElementById('res2').innerHTML = 'paga '+ total+' pesos';

            }
            else{
                document.getElementById("res1").innerHTML = 'sin descuento';
                document.getElementById('res2').innerHTML ='paga '+pago+' pesos';
            }

        }
    })
})
