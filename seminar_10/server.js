const express=require('express')
const{sequelize,University,Student,Course}=require('./models')
const app=express();
app.use(express.json());

app.use('/universities',require('./routes/universities'));
app.use('/students',require('./routes/students'));
app.get('/',(req,res)=>{
    res.json({message:'Serverul merge!'})
})
app.get('/export', async (req, res) => {
  try {
    const universities = await University.findAll({
      include: [
        { model: Student, include: [Course] },
        Course
      ]
    })

    const result = universities.map(univ => ({
      id: univ.id,
      name: univ.name,
      city: univ.city,
      students: univ.Students.map(st => ({
        id: st.id,
        firstName: st.firstName,
        lastName: st.lastName,
        email: st.email,
        courses: st.Courses.map(c => ({ id: c.id, name: c.name }))
      })),
      courses: univ.Courses.map(c => ({ id: c.id, name: c.name })),
      enrollements: univ.Students.flatMap(st =>
        st.Courses.map(c => ({ studentId: st.id, courseId: c.id }))
      )
    }))

    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

async function start_all(){
    try{
    await sequelize.sync({force:true});
    const univ= await University.create({
        name:'ASE Facultatea de Cibernetica Statistica si Informatica Economica',
        city:'Bucuresti'
    })
    await Student.create({
        firstName:'Robert',
        lastName:'Manea',
        email:'maneaRobert27@gmail.com',
        UniversityId:univ.id
    })
app.listen(5932,()=>{
    console.log(`Server ul ruleaza la http://localhost:5932`)
})
    }catch(error){
        console.error('Eroare:',error);
    }
}
start_all();