import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
   firstName:{
       type:String,
       required:true,
       minlength:[3,'FirstName must contain atleast 3 characters'],
       maxlength:[20,'FirstName must not exceed 20 characters'],
     
   },
   lastName:{
    type:String,
    required:true,
    minlength:[3,'LastName must contain atleast 3 characters'],
    maxlength:[20,'LastName must not exceed 20 characters'],
   },
   email:
   {
    type:String,
    required:true,
    validate:[validator.isEmail,"provide a valid email!"]
   },
   phone:
   {
    type:String,
    required:true,
    minlength:[10,'phone number should contain atleast 10 digits'],
    maxlength:[10,'phone number should conatin only 10 digits']
   },
   time:{
    type:String,
    required:true
   },
   date:{
    type:String,
    required:true,
   },
});
export const Reservation=mongoose.model("reservation",reservationSchema);