const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (_, res) => {
    const users = [
        { id: 1, name: 'Gabryel' },
        { id: 2, name: 'Neymar' },
        { id: 3, name: 'Faustão' },
    ];
    return res.json(users);
});

app.listen(3002, () => console.log(`Users service listening on port 3002!`));