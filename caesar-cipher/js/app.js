//Crear una función llamada cipher
function cipher (phraseUser){
 var letterArray1 = [];
  for (var i = 65 ; i <91 ; i++){
   var letter = String.fromCharCode (i);
   letterArray1.push(letter);

   var form1 = cipher (x(letter) - 65 +n) % 26+65;
 }

 return letterArray1;

}

console.log (cipher (phraseUser));


//Crear una función llamada decipher
function decipher(asciiCode){
  var letterArray2 = [];
    for (var i = 0; i < 27 ; i++){
      var letter = String.fromCharCode(i+asciiCode);

  var form2 = decipher (x(letter) - n) % 26;
    }

  return letterArray2;
}

//Pedir frase al usuario y válidarla
var phraseUser = prompt ("Ingresa una frase").toLowerCase();
  if (phraseUser.length === 0)
     alert ("Frase inválida, vuelve a intentarlo");
