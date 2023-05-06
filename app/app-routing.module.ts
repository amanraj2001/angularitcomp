import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamGuard } from './exam.guard';
import { ExamComponent } from './exam/exam.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent,
  children:[
    {path:'start',component:StartComponent,canActivate:[ExamGuard]}
  ]
},
  {path:'timer',component:TimerComponent},
  {path:'res',component:ResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
