
const midWreFuncRoute=(req,res,next)=>{
    console.log("Route level middleware");
   next();
};


module.exports={
    midWreFuncRoute
};