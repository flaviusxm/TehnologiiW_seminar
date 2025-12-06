const {DataTypes}=require('sequelize')
module.exports=(sequelize)=>{
    return sequelize.define('University',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:DataTypes.STRING,
        city:DataTypes.STRING
    })
}