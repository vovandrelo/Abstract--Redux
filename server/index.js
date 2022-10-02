import { sections, products } from './mock.js';
import  cors from 'cors'

import express from 'express';

const app = express();

app.use(cors())

app.get('/sections', (req, res) => {
    setTimeout(() => res.json(sections), 1000)
})
app.get('/products', (req, res) => {
    const section = sections.filter(section => section.id === req.query.sectionId)[0];
    const requiredProd = products.filter(product =>  section.products.includes(product.id));
    setTimeout(() => res.json(requiredProd), 1000)
})

app.listen(3001, () => {
    console.log("Server is running");
});