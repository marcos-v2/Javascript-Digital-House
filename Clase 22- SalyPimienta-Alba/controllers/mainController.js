// Acá nos falta nuestra fuente de datos
const express = require('express');

// Acá nos falta un objeto literal con las acciones para cada ruta
const dishes=[    
    {
        id:1,
        name: 'Carpaccio fresco',
        desc: 'Entrada Carpaccio de salmón con cítricos',
        price: 'U$S 65.50',
        image:"/images/Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        name: 'Risotto de berenjena',
        desc: ' Risotto de berenjena y queso de cabra',
        price: 'U$S 47.00',
        image: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id: 3,
        name: 'Mousse de arroz',
        desc: 'Mousse de arroz con leche y aroma de azahar ',
        price: 'U$S 27.50',
        image:"/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id: 4,
        name: 'Espárragos blancos',
        desc: 'Espárragos blancos con vinagreta de verduras y jamón ibérico ',
        price: 'U$S 37.50',
        image: '/images/esparragos.png'
    }
]


const home = (req, res) => {
    res.render("index", { productos:dishes });
}

const detail = (req, res) => {
       
   if(req.params.id-1 < dishes.length) {

    res.render( 'detalleMenu', dishes[req.params.id])
    
    } else {
    
        res.send("Producto inexistente")
    }
}
   
const mainController= {
    home ,
    detail,
}
// Acá exportamos el resultado

module.exports = mainController