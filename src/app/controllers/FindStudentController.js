import jsonStudents from '../database/student.json';

class findStudentController {
    async findAllStudent(req, res) {
        try{
            res.status(200).json({
                status: true,
                data: jsonStudents
            });
        }catch(error){
            res.status(500).json({
                status: false,
                message: "Ocorreu um erro no servidor"
            });
        }
    }

    async findStudent(req, res){
        const nuRegistration = req.header('nuRegistration');
        
        try{
            const student = jsonStudents.find(student => student.nuRegistration === nuRegistration);

            if(!nuRegistration || nuRegistration.length < 11){
                res.status(404).json({
                    status: false,
                    message: "Formato de CPF inválido"
                });
            }else if(!student){
                res.status(401).json({
                    status: false,
                    message: "CPF não encontrado!"
                });
            }else{
                res.status(200).json({
                    status: true,
                    data: student
                });
            }
        }catch(error){
            res.status(500).json({
                status: false,
                message: "Ocorreu um erro no servidor"
            });
        }
    }
}

export default new findStudentController();