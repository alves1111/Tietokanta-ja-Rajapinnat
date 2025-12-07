const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello from GET');
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/sum/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const result = a + b;
    res.send(`Sum of ${a} and ${b} is ${result}`);
});

app.post('/echo', (req, res) => {
    res.json({ received: req.body });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
