const {DataTypes}=require('sequelize')
module.exports=(sequelize)=>
    {
        return sequelize.define('Student',{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            firstName:DataTypes.STRING,
            lastName:DataTypes.STRING,
            email:DataTypes.STRING
        })
    }