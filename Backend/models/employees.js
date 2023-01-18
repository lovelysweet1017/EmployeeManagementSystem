const mongoose=require('mongoose');

const EmployeeSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:false
    },
    department:{
        type:String,
        required:false
    },
    designation:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:false
    },
    email_address:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    zipcode:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    salary:{
        type:String,
        required:false
    },
    

})

const Employee=module.exports=mongoose.model('Employee', EmployeeSchema);