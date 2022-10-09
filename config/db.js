import mongoose from 'mongoose';
import config from 'config';

//get the connection string
const db = config.get('mongoURI');

const connectDatabase = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch(error){
        console.log('failed to connect to MongoDB');
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDatabase;