import { Router } from "express";

const realTimeRouter = Router();
realTimeRouter.get('/', (req, res)=> {
  res.render('realTimeProducts',
  {
    styles:"/styles.css",
    js:"/realTimeProducts.js"
  })
})

export default realTimeRouter;

