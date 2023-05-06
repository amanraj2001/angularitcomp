import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamdataService } from '../examdata.service';
import { data } from '../models/data';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  quedata:Array<any>=[]
  correct:any=[]
  incorrect:any=[]
  ans:any=[]
        constructor(private demo:ExamdataService,private route:ActivatedRoute) {

        }
        ngOnInit(): void {
          this.demo.getdetails().subscribe(p=>{
            console.log(p);
            this.quedata=p
            this.ans=this.demo.answer
            console.log(this.demo.answer);

            for(let i = 0;i<this.demo.answer.length;i++){

              console.log(this.demo.answer[i].answer.includes(this.quedata[i].Answer));
              console.log(this.demo.answer[i]);

              console.log(this.quedata[i].answer);
              this.correct=(this.quedata.find((x:any)=>x.Answer==(this.demo.answer[i].answer)))
              console.log(this.correct);
              this.incorrect.push(this.quedata.filter((x:any)=>x.Answer!=this.demo.answer[i].answer))
              console.log(this.incorrect);




            }




          })
        }
}
