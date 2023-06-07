import { Router } from "express";
import getList from "../controller/number.controller.js";

const numberRouter = Router();

numberRouter.get('/numbers', (req, res) =>{
    res.send(getList())
});

export default numberRouter