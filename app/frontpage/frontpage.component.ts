import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamdataService } from '../examdata.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {
  form!:FormGroup
  constructor(private demo:ExamdataService,private fb:FormBuilder) {


      this.form=this.fb.group({
        examid:[''],
        examuser:['']
      })
  }

  abc(){
      this.demo.auth(this.form.value.examid,this.form.value.examuser)
  }
}
