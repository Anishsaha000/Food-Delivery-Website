import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Anish123:Anish123@cluster0.3bdgo.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
       console.log('DB A_okey......!!!') ;
    })
}