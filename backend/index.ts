import {json} from "express";
import express from "express";
import cors from "cors";
import 'express-async-errors';
import {handleError, ValidationError} from "./utils/error";

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(json());

//Routes...

app.get('/', async(req,res)=> {
    throw new ValidationError("asdasd")
})

app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log("Listening on port http://loclahost:3001");
})
