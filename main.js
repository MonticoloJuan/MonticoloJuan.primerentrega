alert("Bienvenido al gestionador de pagos en cuotas con tarjeta de crédito")

do {
    let precioproducto = parseInt(prompt("Ingrese el Precio del Producto que quiera comprar"))
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que quiera realizar su pago (1-3-6-12)"))
    if ((cuotas !== "") && (precioproducto !== "")) {
        switch (cuotas) {

            case 1:
                precioproducto = precioproducto * 1.1
                precioproducto = precioproducto.toFixed(2)
                alert("Ah elegido el pagar en 1 sola cuota con un 10% de interés, pagará un total de " + precioproducto)
                break
            case 3:
                precioproducto = precioproducto * 1.2
                precioproducto = precioproducto.toFixed(2)
                alert("Ah elegido el pagar en 3 sola cuota con un 20% de interés, pagará un total de " + precioproducto)
                break
            case 6:
                precioproducto = precioproducto * 1.35
                precioproducto = precioproducto.toFixed(2)
                alert("Ah elegido el pagar en 6 sola cuota con un 35% de interés, pagará un total de " + precioproducto)
                break
            case 12:
                precioproducto = precioproducto * 1.5
                precioproducto = precioproducto.toFixed(2)
                alert("Ah elegido el pagar en 12 sola cuota con un 50% de interés, pagará un total de " + precioproducto)
                break
            default:
                alert("No ha ingresado un precio númerico o una cantidad de cuotas correctas")
                break
        }
        utilizar = prompt("Ingrese \"SI\", si quiere utilizar el calculador nuevamente o \"NO\", si quiere terminar te utilizarlo")
    } else {
        alert("No ha ingresado un precio númerico o una cantidad de cuotas correctas")
        break
    }
} while (utilizar !== "NO")

/*
if (cuotas==1){
    precioproducto = precioproducto * 1.1
    precioproducto = precioproducto.toFixed(2)
    alert ("Ah elegido el pagar en 1 sola cuota con un 10% de interés, pagará un total de " + precioproducto)
}else if (cuotas==3){
    precioproducto = precioproducto * 1.2
    precioproducto = precioproducto.toFixed(2)
    alert ("Ah elegido el pagar en 3 sola cuota con un 20% de interés, pagará un total de " + precioproducto)
}else if (cuotas==6){
    precioproducto = precioproducto * 1.35
    precioproducto = precioproducto.toFixed(2)
    alert ("Ah elegido el pagar en 6 sola cuota con un 35% de interés, pagará un total de " + precioproducto)
}else if (cuotas==12){
    precioproducto = precioproducto * 1.5
    precioproducto = precioproducto.toFixed(2)
    alert ("Ah elegido el pagar en 12 sola cuota con un 50% de interés, pagará un total de " + precioproducto)
}
 */