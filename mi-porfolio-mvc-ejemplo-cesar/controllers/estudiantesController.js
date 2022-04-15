
const students_array = [
    {
        id:1,
        name: 'Oscar'
    },
    {
        id:2,
        name: 'Leonardo'
    },
    {
        id:3,
        name: 'Cristhian'
    },
    {
        id:4,
        name: 'Marcos'
    },
    {
        id:5,
        name: 'Ariel'
    },
    {
        id:6,
        name: 'Alba'
    }
]

const estudiantesController = {

    allStudents: (req,res) => {
        res.send(students_array);
    },

    studentsId: (req,res) => {
        const { id } = req.params; // destructuring - es igual a const id = req.params
        
        const persona = students_array.find( student => student.id === parseInt(id));
        
        res.send(persona)
    }

}

module.exports = estudiantesController;