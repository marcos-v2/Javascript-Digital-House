const autos= require ("./autos")
let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente){
      let autoDefault=null
      let autosBuscados= autos.find(function(auto){
     if (auto.patente===patente) return auto 
      });
   if (autosBuscados===undefined) autosBuscados=null
   return autosBuscados},

      venderAuto: function (patente) 
      {if (this.buscarAuto(patente)!==null)
        {this.autos.forEach(function(auto,index) 
         { //console.log(autos[index]);
            if (auto.patente===patente) {autos[index].vendido=true}
         });
        
      };
},
autosParaLaVenta: function (autos){
   let paraLaVenta= this.autos.filter(function(auto){
     return auto.vendido===false})
   return paraLaVenta
 },
 autosNuevos: function (autos){
      let autosEnVenta=this.autosParaLaVenta(autos);
      let nuevos= autosEnVenta.filter(function(autoEnVenta){
     return autoEnVenta.km < 100});
   return nuevos
 },
 listaDeVentas: function(autos){
  let autosVendidos= this.autos.filter(function(auto){
    return auto.vendido!==false})
  let listaDeimportes= autosVendidos.map(function(autoVendido){return autoVendido.precio })
  return listaDeimportes

 },
   totalDeVentas:function(autos){
     let listaDeimportes=this.listaDeVentas(autos);
      largoDeLista=listaDeimportes.length
   let importeTotal=0
    if(largoDeLista!==0) {importeTotal=listaDeimportes.reduce(function(estado,importe){return estado+importe})} else
    importeTotal=0
          
    return importeTotal;},

    puedeComprar: function(autos,personas){
      let puede=((autos.precio<personas.capacidadDePagoTotal)&&((autos.precio/autos.cuotas)<(personas.capacidadDePagoEnCuotas))) 
      return puede;},
    
    
    autosQuePuedeComprar:function (personas){
      let autosALaVenta=this.autosParaLaVenta(this.autos);
           let QuePuedeComprar=autosALaVenta.filter(function(auto){return((auto.precio<personas.capacidadDePagoTotal)
            &&((auto.precio/auto.cuotas)<(personas.capacidadDePagoEnCuotas)))});
      return QuePuedeComprar;},

};
   
//concesionaria.venderAuto("JJK116"); 
//concesionaria.venderAuto("APL123");
// console.log(concesionaria.autosParaLaVenta(concesionaria.autos));
   //console.log(ventaAuto);
   //console.log(concesionaria.autos);
//console.log(concesionaria.autosNuevos(concesionaria.autos));
//    console.log(vendible);
// console.log(concesionaria.listaDeVentas(concesionaria.autos));
//console.log(concesionaria.totalDeVentas(concesionaria.autos));
//console.log([].length)
// console.log (concesionaria.puedeComprar({marca:"Toyota",modelo:"Corolla",precio:100000,cuotas:14,patente:"JJK116",km:0,color:"Blanco",anio:2019,vendido:false,},{
//   nombre: "Juan",
//   capacidadDePagoEnCuotas: 200000,
//   capacidadDePagoTotal: 1000000
//   } ))
  console.log(concesionaria.autosQuePuedeComprar({nombre: "Juan",
    capacidadDePagoEnCuotas: 100000,
    capacidadDePagoTotal: 150000,
    })) ;                                                
