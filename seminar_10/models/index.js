const {Sequelize}=require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite.db'
})

const University=require('./University')(sequelize)
const Student=require('./Student')(sequelize)
const Course=require('./Course')(sequelize)
University.hasMany(Student);
Student.belongsTo(University);
Student.belongsToMany(Course,{through:'Enrollments'})
Course.belongsToMany(Student,{through:'Enrollments'})
University.hasMany(Course);
Course.belongsTo(University);
module.exports={
    sequelize,University,Student,Course
}