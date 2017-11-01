//Validar entrada
var numberCard = prompt ("Introduce el número de tarjeta");
  if (numberCard.length === 0)
     alert ("Tarjeta inválida, vuelve a intentarlo");

//Encontré esta expresión en www.w3schools.com
	if (/[^0-9-\s]+/.test(numberCard))

//Crear función validCreditCard
function validCreditCard(value) {
  var impares = [numberCard];
   for ( var num = 0; num < arr.length; num++ ) {
  if ( arr[num] % 2 !== 0 ) {
      impares.push(arr[num]);
    }
    return impares;
  }

}
