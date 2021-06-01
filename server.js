const express = require ('express')
const mysql = require('mysql2')
const path = require('path')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'client_db'
})

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.post('/clients',(req,res)=>{
db.query(`INSERT INTO clients (name, email, password)
VALUES ("${req.body.name}", "${req.body.email}","${req.body.password}")`, e =>{
    if(e){
        console.log(e)
    }
    res.json({
        name: 'hotdog'
    })
})
})



app.listen(3000)    
