const http =  require('http');
const count = require('3-read_file_async');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const { url } = req;
    const path = process.argv[2];
    if (url === '/') {
        res.end("Hello Holberton School!");
    }
    else if (url === '/students') {
        res.write('This is the list of our students\n');
        countStudents(path).then((data) => {
            const str = data.join('\n');
            res.end(str);
        });
    }
    else {
        res.end('Not Found')
    }   
});

app.listen(1245);

module.exports = app;