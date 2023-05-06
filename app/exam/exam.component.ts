import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamdataService } from '../examdata.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{
  constructor(private demo:ExamdataService,private route:ActivatedRoute) {


  }

  ngOnInit(): void {
    this.demo.getdetails().subscribe(p=>{
      console.log(p);

    })
  }

}
