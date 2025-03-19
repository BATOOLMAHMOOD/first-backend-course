//CREATE TABLE scores (
   // id SERIAL PRIMARY KEY,
   // player_name VARCHAR(255) NOT NULL,
   // score INT NOT NULL,
   // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//);
//هدول عشان اعمل انشاء جدول بال sql
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
const express = require('express');
const pool = require('./db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


app.post('/scores', async (req, res) => {
    try {
        const { player_name, score } = req.body;
        const newScore = await pool.query(
            "INSERT INTO scores (player_name, score) VALUES ($1, $2) RETURNING *",
            [player_name, score]
        );
        res.json(newScore.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


app.get('/scores', async (req, res) => {
    try {
        const allScores = await pool.query(
            "SELECT * FROM scores ORDER BY score DESC, created_at ASC"
        );
        res.json(allScores.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


app.delete('/scores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM scores WHERE id = $1", [id]);
        res.json({ message: "Score deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


app.listen(PORT, () => {
    console.log("Server is running on port $ {PORT}");
});