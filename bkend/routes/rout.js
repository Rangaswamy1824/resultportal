// routes => rout.js
let express=require("express")
const { add, getdata, getres, del } = require("../controlers/rescon")
let route=new express.Router()
route.post("/add",add)
route.get("/getdata",getdata)
route.get("/getres/:hno",getres)
route.delete("/del/:hno",del)
module.exports=route