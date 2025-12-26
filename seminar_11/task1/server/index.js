require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { Pool } = require("pg");
const fs = require('fs'); // Added fs module

const app = express()
app.use(cors());
app.use(express.json());
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const initDb = async () => {
  try {
    const client = await pool.connect();
    const sql = fs.readFileSync(path.join(__dirname, "schema.sql")).toString();
    await client.query(sql);
    client.release();
    console.log("Baza de date a fost verificata/initializata cu succes!");
  } catch (err) {
    console.error("Eroare la initializarea DB:", err);
    process.exit(1);
  }
};

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT name, type FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Eroare server");
  }
});
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
const PORT = process.env.port || 5042;

const startServer = async () => {
  await initDb();
  app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
};

startServer();