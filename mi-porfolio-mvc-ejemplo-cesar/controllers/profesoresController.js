

const teachers_array = [
    {
        id:1,
        name: "Joan"
    },
    {
        id:2,
        name:"Cesar"
    }
]


const profesoresController = {

    allTeachers: (req,res) => {
        res.send(teachers_array);
    },

    teachersId: (req,res) => {
        const { id } = req.params; // destructuring
        
        const persona = teachers_array.find( student => student.id === parseInt(id));
        
        res.send(persona)
    }
}

module.exports = profesoresController;