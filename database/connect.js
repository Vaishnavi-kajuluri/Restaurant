import mongoose from "mongoose";
export const connection =() =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Restaurant",
    })
    .then(()=>{
        console.log("connected to database")
    }).catch((err)=>
    {
          console.log(`error occurred ${err}`);
    });
};