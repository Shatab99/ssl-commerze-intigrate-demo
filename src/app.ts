import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/Utils/global.Error.handler'
import router from './app/modules/Router/index.router'
const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello, this is bike riding sever!!')
})

//Connecting global error handler 

app.use("/api/v1", router)

app.use(globalErrorHandler)


export default app