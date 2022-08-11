const indumentaria=[]
let cantidad = 5
do{
    let entrada= prompt ("Por favor escriba aqui el nombre de la prenda que desee agregar a su compra ")
    indumentaria.push (entrada.toUpperCase())
    console.log(indumentaria.length)
} while (indumentaria.length != cantidad)

const nuevalista = indumentaria.concat([])
    
alert  (nuevalista.join ("\n")) 

let valordescontar=prompt ("El total de la suma del importe de cada prenda es de $50000, escriba en el la caja que monto quiere hacer en efectivo para aplicarle el descuento del 30%")
let precio=(50000)
let calculo=(valordescontar*30/100)
let preciofinal=(valordescontar-calculo)


alert("Aplicando el descuento el monto a pagar en efectivo es de $"+ preciofinal + " al resto lo puede financiar con su tarjeta de preferencia")
