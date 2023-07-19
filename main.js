let valorMinimo = parseInt(prompt(`Ingrese un valor minimo.`));
let valorMaximo = parseInt(prompt("Ingrese un valor maximo"));
let numeroDeIteraciones = 0;
let iterador = 0;
let sumaPar = 0;
let sumarImpar = 0;

if(isNaN(valorMinimo) == false && isNaN(valorMaximo) == false && valorMinimo != null && valorMaximo != null){

    for (let i = valorMinimo; i <= valorMaximo; i++){
        iterador = i;
        console.log(iterador);
    
        if(i % 2 == 0){
            sumaPar = sumaPar + i;
        }else if(i % 2 != 0){
            sumarImpar = sumarImpar + i;
        }
    };
    
    numeroDeIteraciones = iterador - valorMinimo
    alert(`EL NUMERO DE ITERACIONES ES ${numeroDeIteraciones}`);
    
    if(numeroDeIteraciones % 2 == 0){
        alert(`${numeroDeIteraciones} es par`);
        alert(`la suma de todos los numeros pares da ${sumaPar}`);
    
    }else if(numeroDeIteraciones % 2 != 0){
        alert(`${numeroDeIteraciones} es IMpar`);
        alert(`la suma de todos los numeros impares da ${sumarImpar}`);
    }
}else{
    
    alert("ERROR. VALOR INCORRECTO")
}