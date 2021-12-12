import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { GetemployeeComponent } from './components/getemployee/getemployee.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage', pathMatch:'full'},
  {path:'addemployee', component:AddemployeeComponent},
  {path:'homepage',component:GetemployeeComponent},
  {path:'updateemployee/:id',component:UpdateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
