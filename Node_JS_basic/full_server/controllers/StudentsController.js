import readDatabase from '../utils'

class StudentsController {

    static async getAllStudents(req, res) {
        const msg = 'This is the list of our students\n';
        try {
            const students = await readDatabase(path);
            res.send(`${msg}${students.join('\n')}`);
            res.sendStatus(200);
        } catch (err) {
            res.send(`${msg}${err.message}`);
            res.sendStatus(500);
        }     
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        
        if (major !== 'CS' && major !== 'SWE') {
            res.send('Major parameter must be CS or SWE');
            res.sendStatus(500);
            return;
        }

        try {
            const students = await readDatabase(path);
            const filteredStudents = students.filter(students => students.major === major);
            const firstNames = filteredStudents.map(students => students.firstName);
            res.send(`List: ${firstNames.join(', ')}`);
            res.sendStatus(200);
        } catch (err) {
            res.send('Cannot load the database');
            res.sendStatus(500);
        }
    }
}