
class AppController {

    static getHomepage(req, res) {
        res.send('Hello Holberton School!')
        res.sendStatus(200);
    }

}