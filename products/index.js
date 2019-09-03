const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', (_, res) => {
    const products = [
        { id: 1, price: 5 },
        { id: 2, price: 10 },
        { id: 3, price: 15 },
    ];
    return res.json(products);
});

app.listen(3001, () => console.log(`Products service listening on port 3001!`));