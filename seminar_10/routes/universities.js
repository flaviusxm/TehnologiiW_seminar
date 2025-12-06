const express=require('express')
const router=express.Router();
const {University,Student,Course}=require('../models')

router.get('/:id/students',async (req,res)=>{
    try{
        const univ=await University.findByPk(req.params.id,{
            include:Student
        })
        if (!univ){
            return res.status(404).json({error:'Nu a fost gasita o universitate !'})
        }
        res.json(univ.Students)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
router.get('/:universityId/students/:studentId/enrollements',async (req,resp)=>{
     try {
    const { universityId, studentId } = req.params
    const student = await Student.findOne({
      where: { id: studentId, UniversityId: universityId },
      include: Course
    })
    if (!student) {
      return resp.status(404).json({ error: 'Studentul nu a fost gasit' })
    }
    resp.json(student.Courses)  
  } catch (err) {
    resp.status(500).json({ error: err.message })
  }
})
router.get('/:universityId/students/:studentId',async (req,resp)=>{
    try{
        const {universityId,studentId}=req.params;
        const student=await Student.findOne({
            where:{
                id:studentId,
                UniversityId:universityId
            },
            include:University
        })
        if(!student){
            return resp.status(400).json({
                error:'Studentul nu a fost gasit'
            })
        }
        resp.json(student);
    }catch(err){
        resp.status(500).json({err:err.message});
    }
})

router.post('/',async(req,resp)=>{
    try{
        const univ=await University.create(req.body);
        resp.json(univ);
    }catch(err){
        resp.status(500).json({error:err.message})
    }
})
module.exports=router;

