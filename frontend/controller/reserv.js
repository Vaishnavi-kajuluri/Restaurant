import ErrorHandler  from "../error/error.js";
import { Reservation } from "../models/reserschema.js";

export const sendReservation=async (req,res,next) =>{
    const {firstName,lastName,email,phone,time,date}=req.body;
    if(!firstName ||!lastName|| !email ||!phone ||!time ||!date){
        return next(new ErrorHandler("please fill all required fields",400));
    }
    try{
     await Reservation.create({firstName,lastName,email,phone,time,date});
     res.status(200).json({
        success:true,
        message:"Reservation Done",
    });
    }
    catch(err){
     if(err.name==="ValidationError"){
        const validationError=Object.values(err.errors).map(err=>err.message);
        return next(new ErrorHandler(validationError.join(","),400));
    }
    return next(err);
}
};