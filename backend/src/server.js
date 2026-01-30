import 'dotenv/config';
import app from './app.js';
import { testConnection } from './config/db.js';

const PORT = process.env.PORT || 3000;

await testConnection();

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})