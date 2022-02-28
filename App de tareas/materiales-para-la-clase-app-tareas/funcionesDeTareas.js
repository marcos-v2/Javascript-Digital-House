const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    // Microdesafio 2.1
    escribirJSON: function(tareas) {
        let result = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, result);
    },
    // 2.1.1 Convertir el array recibido como parámetro a un string en formato Json.
    // 2.1.2 Guardar la información en el archivo .json que contiene la lista de nuestras tareas. Para esto necesitarás el método writeFileSync del módulo FS.

    // Microdesafio 2.2
    guardarTarea: function(tarea) {
        let listaDeTareasActual = this.leerArchivo();
        listaDeTareasActual.push(tarea);
        this.escribirJSON(listaDeTareasActual);
    },
    // 2.2.1 Obtener toda la información del archivo .json en donde tenemos nuestras tareas. Recordá que esta acción la hace la función “leerJSON”.
    // 2.2.2. Debemos agregar la tarea nueva al array que obtuvimos en el punto anterior.
    // 2.2.3. Guardar el array actualizado en el archivo .json. Recordá que ya tenemos la función “escribirJSON” que ya sabe hacer este punto.
    leerPorEstado: function(estado) {
        let tareas = this.leerArchivo();

        let tareasFiltradas = tareas.filter(function(tarea) {
            return tarea.estado == estado
        });

        return tareasFiltradas;
    }
}
module.exports = archivoTareas;
