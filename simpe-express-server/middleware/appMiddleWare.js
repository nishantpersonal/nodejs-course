const simpleMiddleWare=(req,res,next)=>{
    try{
        console.log("App Level Middleware");
        next();
    }
    catch(error){
        res.status(400).send("Mahn error");
    }
};

module.exports={simpleMiddleWare};