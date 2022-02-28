function masMenos(unArray){
    let positivos=0
    let fraccionPositivos=0
    let negativos=0
    let fraccionNegativos=0
    let ceros=0
    let fraccionCeros=0
    let fracciones=[]
    for (i=0; i<unArray.length;i++){
        if(unArray[i]==0) {ceros=ceros+1}
        else if (unArray[i]>0){positivos=positivos+1} else
        {negativos=negativos+1}
    }
fraccionPositivos=positivos/unArray.length
fraccionNegativos=negativos/unArray.length
fraccionCeros=ceros/unArray.length
fracciones.push(fraccionPositivos);
fracciones.push(fraccionCeros);
fracciones.push(fraccionNegativos);
return fracciones
}
 console.log(masMenos([1]))