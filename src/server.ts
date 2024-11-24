import express from 'express'
import router from "./router";
import apiRouter from "./api-router";
const app = express()

app.use('/', router)
app.use('/api', apiRouter)
export default app