import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from './employees.service';
import { Employee } from './schema/employees';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeesService]
})
export class EmployeesComponent {
  employees: Employee[]=[];
  employee: Employee = new Employee;
  _id:string='';
  first_name:string='';
  last_name:string='';
  employee_id:string='';
  department:string='';
  designation:string='';
  gender:string='';
  email_address:string='';
  phone:string='';
  address:string='';
  city:string='';
  state:string='';
  zipcode:string='';
  country:string='';
  salary:string='';
  fieldsetDisabled:boolean = false;
  isSaveVisible:boolean=true; 

  
constructor(private employeeService:EmployeesService){

}

ngOnInit(){
//this.employeeService.getEmployees().subscribe((employees:Employee[])=>{this.employees=employees});
this.viewEmployees();

}

viewEmployees(){
  this.employeeService.getEmployees().subscribe({
    next: (data:any) => {
      this.employees = data;
      console.log(data);
    },
    error: (e) => console.error(e)
  });
}

viewEmployee(id:any){
 //var employees=this.employees;
this.employeeService.viewEmployee(id).subscribe({next:(data:any)=>{
  this.employee=data;
  this._id=this.employee._id;
  this.first_name=this.employee.first_name;
  this.last_name=this.employee.last_name;
  this.department=this.employee.department;
  this.designation=this.employee.designation;
  this.gender=this.employee.gender;
  this.email_address=this.employee.email_address;
  this.phone=this.employee.phone;
  this.address=this.employee.address;
  this.city=this.employee.city;
  this.state=this.employee.state;
  this.zipcode=this.employee.zipcode;
  this.country=this.employee.country;
  this.salary=this.employee.salary;
}})
}


addeditEmployee(addoredit:any){

  const newEmployee={
    first_name:this.first_name,
    last_name:this.last_name,
    department:this.department,
    designation:this.designation,
    gender:this.gender,
    email_address:this.email_address,
    phone:this.phone,
    address:this.address,
    city:this.city,
    state:this.state,
    zipcode:this.zipcode,
    country:this.country,
    salary:this.salary

  }
  if(this._id=='0'){
    //this.employeeService.addEmployee(newEmployee).subscribe(({employee})=>{this.employees.push(employee);})
    this.employeeService.addEmployee(newEmployee).subscribe(data=>alert('Employee added'));
  }
  else {
    this.employeeService.updateEmployee(this._id,newEmployee).subscribe(data=>alert('Employee updated'));
  }

}


deleteEmployee(id:any){
  var employees=this.employees;
this.employeeService.deleteEmployee(id).subscribe(data=>{
 // if(data.n==1){
    for (var i=0;i<employees.length;i++){
      if(employees[i]._id==id){
        employees.splice(i,1);
      }
   // }
  }
})
}

reloadpage(){
  window.location.reload();
}

disableFields(){
  this.fieldsetDisabled = true; 
}

enableFields(){
  this.fieldsetDisabled = false;
}

}
