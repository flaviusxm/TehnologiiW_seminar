const {Sequelize}=require('sequelize')

const sequelize=new Sequelize({
    dialect:"sqlite",
    storage:"./sql3lite/test.db"
}
);
sequelize.sync().then(()=>{
    console.log('All models are synched')
})
module.exports=sequelize;