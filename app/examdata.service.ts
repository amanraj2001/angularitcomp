import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { res } from './models/data';


@Injectable({
  providedIn: 'root'
})
export class ExamdataService {
  answer!:Array<res>
  constructor(private http:HttpClient,private route:Router) { }

  getdetails():Observable<any>{
    return this.http.get('./assets/exam.json')
  }
avail:boolean=false
  auth(id:number,user:string){
    if(id==1 && user=='user'){
      this.avail=true
      // this.route.navigate(['exam'])
    }
    else{
      this.avail=false
    }
  }

  islogg(){
    return this.avail
  }
}
