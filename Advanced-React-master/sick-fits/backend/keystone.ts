import 'dotenv/config';

//get our database url 
const databaseURL = process.env.DATABASE_URL

//create session config to authentic users

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360 // How long should they stay signed in for?
}