import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('mongoDB connected succesfully');
            
        })
        connection.on('error',(err: string)=>{
            console.log('mongo db connection error .please make sure mongo db is running'+ err);
            process.exit();
            
        })
        
    } catch (error) {
        console.log('something goes wrong');
        console.log(error);
        
        
        
    }
}
 