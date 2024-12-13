import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/Utils/global.Error.handler'
import router from './app/modules/Router/index.router'
const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('<h1>Hello, this is Demon SSL server!!</h1>')
})

//Connecting global error handler 

app.use("/api/v1", router)

app.use(globalErrorHandler)


export default app