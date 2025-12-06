const {DataTypes, INTEGER}=require('sequelize')
module.exports=(sequelize)=>{
    return sequelize.define('Course',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:DataTypes.STRING
    })
}