import mongoose from 'mongoose';

 async function connect(){

    try {
        
        await mongoose.connect('mongodb://localhost:27017/ts-app-tutorial' , {
            useNewUrlParser: true
        });

        console.log('>>>> Database connected')
    } catch (error) {
        console.log('database_err', error)
    }
} 


export default connect