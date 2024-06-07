import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import productRoutes from './routes/product.routes.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
