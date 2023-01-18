const express=require('express');
const router=express.Router();
const Employee=require('../models/employees');

router.get('/employees',(req,res,next)=>{
    //getting employees list
    Employee.find(function(err,employees){
        res.json(employees);
    })
})

router.get('/viewemployee/:id',(req,res,next)=>{
  //viewing an employee
  // Employee.remove({_id:req.params.id},function(err,result){

  // })

Employee.findById({_id:req.params.id})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  });


})

router.post('/add',(req,res,next)=>{
    //adding a employee
    let newEmployee=new Employee({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        department:req.body.department,
        designation:req.body.designation,
        gender:req.body.gender,
        email_address:req.body.email_address,
        phone:req.body.phone,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
        country:req.body.country,
        salary:req.body.salary

    })

    newEmployee.save((err,Employee)=>{
        if(err){
            res.json({msg: 'failed to add employee'});
        }
        else{
            res.json({msg: 'employee added successfully'});
        }
    })
})

router.delete('/delete/:id',(req,res,next)=>{
    //removing a employee
    Employee.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json('employee removed successfully');
        }
    })
})


//updating a employee
router.post('/update/:id',(req,res,next)=>{
    const updateEmployee = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      department:req.body.department,
      designation:req.body.designation,
      gender:req.body.gender,
      email_address:req.body.email_address,
      phone:req.body.phone,
      address:req.body.address,
      city:req.body.city,
      state:req.body.state,
      zipcode:req.body.zipcode,
      country:req.body.country,
      salary:req.body.salary
    };
    Employee.updateOne({_id: req.params.id}, updateEmployee).then(
      () => {
        res.status(201).json({
          message: 'employee updated successfully'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });


  
module.exports = router;