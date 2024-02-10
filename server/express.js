import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from 'cors'
import helmet from "helmet";


const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Marketplace project running..." });
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(cors())

export default app