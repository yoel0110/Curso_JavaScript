
//Funcion NaN

let numero = "3"; //si el valor posee algun caracter se cumple la condicion

if(isNaN(numero))
{
    console.log("El valor no es un numero");
}
else
{
    console.log("El valor es un numero");

}

switch(Number(numero))
{
    case 1:
        console.log("1 - Hello, World!");
            break;
    case 2:
        console.log("2 - Hello, World!");
            break;
    case 3:
        console.log("3 - Hello, World!");
    default:
        console.log("xd");
            break;
}