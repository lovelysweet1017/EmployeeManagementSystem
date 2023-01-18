import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { Employee } from './schema/employees';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient ) { 
  }

  //retreiving employees
  getEmployees(){
    return this.http.get('http://localhost:3000/api/employees').pipe(map(res=>res));
  }

  addEmployee(newEmployee:any){
    var headers=new HttpHeaders();
    //const headers = new HttpHeaders().set('Content-Type', 'application/json')
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/add',newEmployee,{headers:headers}).pipe(map(res=>res));
  }
  deleteEmployee(id:any){
    return this.http.delete('http://localhost:3000/api/delete/'+id).pipe(map(res => res));
  }

  viewEmployee(id:any){
    return this.http.get('http://localhost:3000/api/viewemployee/'+id).pipe(map(res => res));
  }

  updateEmployee(id:any,newEmployee:any){
    var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/update/'+id,newEmployee,{headers:headers}).pipe(map(res=>res));
  }

}


