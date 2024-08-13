const express=require('express')
const server=express()
const fs=require('fs')
const cors = require('cors');
const data=JSON.parse(fs.readFileSync('../01tut/data/db.json','utf-8'))
const prod=data.items
server.use(cors()); 
server.get('/item',(req,res)=>{
    res.json(prod)
})
server.get('/item/:id',(req,res)=>{
    const id = (req.params.id)
    res.send(prod[id-1])
    console.log(prod[id-1])
})

server.listen(3002,()=>{
    console.log('server has started')
})
