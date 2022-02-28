
function reporteDePasajeros(cantidadEstaciones){
    let pasajeros=0
    let reporte=[]
for (i=0;i<=cantidadEstaciones; i=i+1){
    if(i==0) {pasajeros=pasajeros+200; 
        reporte.push("En la estación "+i+ " hay "+pasajeros+" pasajeros arriba del tren");}
     else if ((i!=5)&& (i>0)) 
    {pasajeros=pasajeros-30;
    pasajeros=pasajeros +50;
    reporte.push("En la estación "+i+ " hay "+pasajeros+" pasajeros arriba del tren");
    }
     else {pasajeros=pasajeros +120;
     pasajeros=pasajeros -80;
    reporte.push("En la estación "+i+ " hay "+pasajeros+" pasajeros arriba del tren");}
}
return reporte}
console.log(reporteDePasajeros(5))