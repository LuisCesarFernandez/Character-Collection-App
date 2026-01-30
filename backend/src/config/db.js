import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

//Probar conexión
export async function testConnection()
{
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Conexión exitosa',result.rows[0].now);
    } catch (error) {
        console.log('Error al conectarse al Postgre', error.message);
    }
}

export default pool;
