import pool from "../config/db.js";

//Get All
export async function getAllWaifus(req, res) {
    try {
        const result = await pool.query('SELECT * FROM waifu');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener las waifus'})
    }
}

//Get One
export async function getOneWaifu(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query(`SELECT * FROM waifu WHERE id_waifu=$1`,[id]);

        if (result.rows.length === 0){
            return res.status(404).json({message:'Waifu no encontrada'});
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//Create
export async function postWaifu(req, res) {
    try {
        const {nombre_waifu, anime, puntuacion, image_waifu} = req.body;
        const result = await pool.query(`INSERT INTO waifu (nombre_waifu, anime, puntuacion, image_waifu) VALUES ($1, $2, $3, $4) RETURNING *`,[nombre_waifu, anime, puntuacion, image_waifu]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Delete
export async function deleteWaifu(req, res) {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM waifu WHERE id_waifu=$1`,[id]);
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
}