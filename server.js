const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.send('Veera');
})

const branch = [{
        id: 1,
        name: "IT"
    },
    {

        id: 2,
        name: "CSE"
    },
    {
        id: 3,
        name: "ECE"
    }

]
app.get('/branch', (req, res) => {
    res.json(branch)
})
app.get('/branch/:id', (req, res) => {
    const newData = branch.filter(item => item.id.toString() == req.params.id)
    return res.json(newData);
})
app.listen(2003, () => console.log('server run'));