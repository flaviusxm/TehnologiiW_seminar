"use strict";

const express=require('express')
const sequelize=require('./sequelize');
const {Op}=require('./sequelize')
const Employee = require('./models/employee');
require('./models/employee')
const app=express()
app.use(express.json())

app.get('/employees',async (req,resp)=>{
    try{
        const employees=await Employee.findAll();
        resp.status(200).json(employees);
    }catch(err){
        resp.status(500).json({error:err.message})
    }
})
app.get('/employees/nume/:nume',async (req,resp)=>{
    try{
        const nume=req.params.nume;
        const employees=await Employee.findAll({
            where:{
                name:{
                    [Op.like]:`%${nume}%`
                }
            }
        })
        resp.status(200).json(employees)
    }catch(err){
        resp.status(500).json({err:err.message})
    }
})
app.delete('/employees/delete/:id',async(req,resp)=>{
    try{
        const employee=await Employee.findByPk(req.params.id);
        if(employee){
            employee.destroy();
            resp.status(200).json({message:'Angajatul a fost sters'});
        }
    }catch (error){
resp.status(500).json({error:error.message});
    }
})
app.get('/employees',async (req,resp)=>{
    try{
        const {sortSalary}=req.params;
        let op={
            attributes:['id','departament','salary']
        }
        if(sortSalary){
            op.order=[['salary','DESC']]
        }
        const employees=await Employee.findAll(op)
        resp.status(200).json(employees)
    }catch(err)
    {
        resp.status(500).json({err:err.message})
    }
})
app.listen(5693,async ()=>{
    console.log(`Server runs on http://localhost:5693`);
    try{
        await sequelize.authenticate()
        console.log(`Connection established successfully`)
    }catch(err){
        console.error(`Unable to connect ${err}`)
    }
})
