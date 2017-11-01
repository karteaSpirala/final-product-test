# **Cifrado César** <h1>

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## Pseudocódigo <h2>


1. Crear una página web a través de un _html_
2. Pedir una frase al usuario por medio de un _prompt_
<!-- Recuerda que sólo letras, no números ni caracteres especiales. -->

    2. Verificar que la frase no sea un campo vacío.
    2. Verificar que no contenga números ni caracteres especiales.
     2. Si algunos de los casos anteriores son _true_, mandar un _alert_ con "Frase no válida, favor de volver a intentar".

3. Si la frase pasa la validación, crear una función para cifrar utilizando el siguiente nombre _**"cipher"**_.
4. Crea otra función para descifrar utilizando el siguiente nombre _**"decipher"**_.
5. Utilizar la siguiente fórmula para cifrar: __(x-65+n)%26+65__
6. Utiliza la siguiente fórmula para descifrar:__(x-n)%26__.
7. Poder cifrar y decifrar tanto letras MAYÚSCULAS como minúsculas.

### Diagrama de flujo <h3>

A continuación se presenta la solución visual a través de un diagrama de flujo.

 [Diagrama](http://subefotos.com/ver/?531c4d5adbae3483f519f76bc229f2a5o.png)
