import readDatabase from '../utils'

class StudentsController {

    static async getAllStudents(req, res) {
        const msg = 'This is the list of our students\n';
        try {
            const students = await readDatabase(path);
            res.status(200).send(`${msg}${students.join('\n')}`);
        } catch (err) {
            res.status(500).send(`${msg}${err.message}`);
        }     
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(path);
            const filteredStudents = students.filter(students => students.major === major);
            const firstNames = filteredStudents.map(students => students.firstName);
            res.status(200).send(`List: ${firstNames.join(', ')}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;