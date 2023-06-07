import  Express  from 'express';
import numberRouter from './router/number.router.js';
import getList from "./controller/number.controller.js";

const app = Express();
const port = 38000

app.get('/',(req,res)=>{
    res.send('It is working :)')
})

app.use('/numbers', (req, res) => {
    res.send(getList().join('</br>'))
});

app.listen(port,()=>{
    console.log(`Servidor inicado em http://localhost:${port}`)
})