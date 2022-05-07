const home=(req,res)=>res.send("Hola Admin: "+req.query.user)
module.exports={home}