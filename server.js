const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check the request URL
    const url = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(__dirname, url);

    // Check if the file exists
    fs.exists(filePath, (exists) => {
        if (exists) {
            // Read the file and serve it
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        } else {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        }
    });
});

const PORT = 5500;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
