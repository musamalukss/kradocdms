import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const user = new Schema({
    title: {
        type: String,
      
    },
    firstname: {
        type: String,
        
    },
    lastname: {
        type: String            
    },
    contact: {
        type: String            
    },
    email: {
        type: String            
    },
    username: {
        type: String            
    },
    Hashedpassword: {
        type: String            
    },
    salt: {
        type: String            
    },
    created_by: {
        type: String            
    },
    created_at: {
        type: Date            
    },
    updated_at: {
        type: Date            
    },
   
});