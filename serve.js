var https = require('http');
var fs = require('fs');

https.createServer((req, res) =>
    // {
    //     res.write('veera');
    //     res.end();
    //     console.log('server running..');
    // }
    {
        fs.readFile('test1.txt', (err, data) => {
            res.write(data);
            res.end();
            console.log('server running..');
        })
    }

).listen(2020)