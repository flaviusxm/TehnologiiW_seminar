const express=require('express')
const router=express.Router()
const {Student}=require('../models')
router.post('/',async(req,res)=>{
    try{
        const student=await Student.create(req.body)
        res.json(student)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    if (!student) {
      return res.status(404).json({ error: 'Studentul nu a fost gasit' })
    }
    await student.update(req.body)
    res.json(student)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.delete('/:id',async (req,resp)=>{
    try{
        const student=await Student.findByPk(req.params.id)
        if(!student){
        return resp.status(400).json({err:'Studentul nu a fost gasit'})
        }
        student.destroy()
        resp.json({message:'Studentul a fost sters'})
    }catch(err){
        resp.json({message:'Studentul nu a fost sters'})
    }
})
module.exports=router;