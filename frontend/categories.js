const express=require('express')
const app=express();
app.use(express.json());

const router=express.Router()
 const categories=[
     {id:1,name:'Electronics'},
     {id:2,name:'Clothing'},
     {id:3,name:'Books'}
 ]
 router.get('api/categories',(req,res)=>{
    res.send(categories);
 })
 router.post('/api/categories',(req,res)=>{
    const category={
        id:categories.length+1,
        name:req.body.name
    }
    categories.push(category)
    res.send(category)
 });
 app.delete ('/api/categories',(req,res)=>{
    const category=categories.find(c=>c.id==req.parseInt(req.params.id));
    if(!category) return res.status(404).send("the genre with give id is not found")
        res.send(category);

 });
 const port=process.env.PORT || 3000;
 app.listen(port,()=>console.log(`listening on port ${port}`));

