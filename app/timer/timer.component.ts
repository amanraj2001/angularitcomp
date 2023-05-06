import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamdataService } from '../examdata.service';
import { data, res } from '../models/data';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {

  time!: string;
  int:any
  d = new Date();
  Quedata!:Array<data>
  q1={} as data
  ans!:string
  arr:Array<res>=[]

  constructor(private demo:ExamdataService,private fb:FormBuilder,private router:Router) {







    this.d.setHours(0, 0, 10);
  //  this.int= setInterval(() => {
  //     this.d.setMilliseconds(-1000);
  //     let hour = this.d.getHours();
  //     let minute = this.d.getMinutes();
  //     let sec = this.d.getSeconds();
  //     this.time = hour + ':' + minute + ':' + sec;
  //     if (hour == 0 && minute == 0 && sec == 0) {
  //       clearInterval(this.int);
  //     }
  //   }, 1000);
this.start()

    this.demo.getdetails().subscribe(p=>{
      console.log(p);
      this.Quedata=p
      console.log(this.Quedata.find(x=>x.QuestionID=1));
      this.q1=this.Quedata.find(x=>x.QuestionID) as data
      console.log(this.Quedata.length);
      // this.question=this.Quedata

    })

  }
  st:boolean=false
  stop(){
    clearInterval(this.int)
    this.st=true
  }
  start(){
    this.st=false

    this.int= setInterval(() => {
      this.d.setMilliseconds(-1000);
      let hour = this.d.getHours();
      let minute = this.d.getMinutes();
      let sec = this.d.getSeconds();
      this.time = hour + ':' + minute + ':' + sec;
      if (hour == 0 && minute == 0 && sec == 0) {
        clearInterval(this.int);
      }
    }, 1000);

  }
counter:number=1
  next(){
    console.log("sdf");
    this.counter=this.counter+1
    this.q1=this.Quedata.find(x=>x.QuestionID==this.counter) as data
    console.log(this.counter);
    this.arr.push({
      question:this.q1.Description,
      answer:this.ans
    })
    console.log(this.q1);



  }

  sub(){
    this.arr.push({
      question:this.q1.Description,
      answer:this.ans
    })
    console.log(this.arr);
    this.demo.answer=this.arr
    this.router.navigate(['res'])
}


}
