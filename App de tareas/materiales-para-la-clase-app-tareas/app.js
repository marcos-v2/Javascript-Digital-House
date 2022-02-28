let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process
let accion = process.argv[2];
// 2.3.1. Algo como node app.js crear "Nombre de la tarea"

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        // Microdesafio 1
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        tareas.forEach(function(elemento, index) {
            console.log((index + 1) +'. ' + elemento.titulo + ' - ' + elemento.estado);
        });
        console.log()
        break;

    case 'crear':
        console.log('Creando una tarea');
        console.log('------------------');
        let tituloTareaNueva = process.argv[3];

        let tarea = {
            titulo: tituloTareaNueva,
            estado: "pendiente"
        };

        // Aquí guardo
        archivoTareas.guardarTarea(tarea);
        break;

    case 'filtrar':
        console.log('Filtrando tareas');
        console.log('------------------');
        let estadoABuscar = process.argv[3];
        let resultado = archivoTareas.leerPorEstado(estadoABuscar);
        resultado.forEach(function(tarea) {
            console.log(tarea);
        });
        break;

    case undefined:
        console.log();
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    // 2.3.2. En el archivo “app.js” necesitaremos un nuevo “case” que pueda procesar la opción “crear” ingresada como argumento. ¿Recordás cómo hacerlo?
    // 2.3.3. Dentro del case “crear” crearemos una variable de tipo objeto literal con 2 atributos: título y estado. El título vendrá del argumento ingresado por consola y el estado de la tarea será siempre “pendiente”. Ahora debemos guardar esta tarea junto con las otras que ya están en el archivo “.json”. Ya tenemos una función que sabe hacerlo ¿Recordás cuál?

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
