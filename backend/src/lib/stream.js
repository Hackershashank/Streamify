import {StreamChat} from "stream-chat"

import dotenv from 'dotenv';
dotenv.config();

const apiKey=process.env.STREAM_API_KEY;
const apiSecret=process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.log("Stream API key or Secret is Missing");
}

const streamClient=StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser=async(userData)=>{
    try {
        //upsert means create or update depending upon the state
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.log("Error creating Strem User",error);
    }
};

export const generateStreamToken=(userId)=>{
    try {
        // ensure userId is a string
        const userIdStr=userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.log("Error in generating Stream token",error);
    }
}