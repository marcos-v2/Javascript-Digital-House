function naipes (palo){
    let numeros=[1,2,3,4,5,6,7,10,12]
    let delMismoPalo=[]
    for(i=0;i<=numeros.length;i=i+1){
        delMismoPalo.push(numeros[i]+" de "+palo)
    }
return delMismoPalo}
console.log(naipes("oro"))