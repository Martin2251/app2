import 'dotenv/config';
import {config, createSchema} from '@keystone-next/keystone/schema'

//get our database url 
const databaseURL = process.env.DATABASE_URL

//create session config to authentic users

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in for?
    secret: process.env.COOKIE_SECRET,
};

export default config ({
    server:{
        cors:{
            origin: [process.env.FRONTEND_URL],
            credentials:true
        }
    },
    db:{
        adapter:'mongoose',
        url:da
    }
})