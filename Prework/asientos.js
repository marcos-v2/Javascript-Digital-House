function asientosDisponibles(vacios,pedido)
{let mensaje="Lo sentimos, el asiento número " +pedido + " está ocupado, pero aún quedan " + vacios.length+ " asientos disponibles";

 for(i=0;i<=vacios.length;i=i+1){
           if(vacios[i]==pedido) mensaje="Felicitaciones, el asiento número " +pedido+" está disponible"}
        
return mensaje}

console.log (asientosDisponibles([3,15,8,25],25));