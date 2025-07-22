const express=require('express')
const categories=require('.')
const app=express();
const mongoose=require('mongoose')
app.use(express.json())
app.use(categories)

const port=process.env.PORT || 3000
app.listen(port,()=>console.log('listening on port'))