function caloriasDeTrote(vueltas){
    let calorias=0
    for (i=1;i<=vueltas;i++){
        calorias=calorias+5*i
    }return calorias
}
console.log (caloriasDeTrote(3))