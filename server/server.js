import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if(err) {
            return res.json({Message: "Error inside server"});
        }
        return res.json(result);
    })
})

app.post('/student', (req, res) => {
    const sql = "INSERT INTO student (`name`, `course`, `email`, `phone`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.course,
        req.body.email,
        req.body.phone
    ]
    db.query(sql, [values], (err, result) => {
        if(err) {
            return res.json({Message: "Error inside server"});
        }
    })
})

app.get("/read/:id", (req, res) => {
    const sql = "SELECT * FROM student WHERE id = ?";
    const id = req.params.id;


    db.query(sql, [id], (err, result) => {
        if(err) {
            return res.json({Message: "Error inside server"});
        }
        return res.json(result);
    })
})

app.listen(8081, () => {
    console.log("Listening...")
});