import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path : path.join((process.cwd(), '.env'))})


export default {
    nodeEnv : process.env.Node_ENV,
    port : process.env.PORT,
    database_url : process.env.DATABASE_URL,
    defaultPass : process.env.DefaultPass,
    jwtSecret : process.env.jwt_secret,
    storeId : process.env.STORE_ID,
    storePassword : process.env.STORE_PASSWORD
}