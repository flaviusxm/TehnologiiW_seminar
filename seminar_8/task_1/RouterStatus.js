const express=require('express')
const router=express.Router()

router.get('/',(req,resp)=>{
    resp.status(200).json({
        success:true,
        message:'Serverul functioneaza',
        status:200
    })
});
module.exports=router;