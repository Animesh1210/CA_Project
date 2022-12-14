import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';

const routes: Routes = [
  {path: '', component: HomeComponent},   //fixed landing page (home to null route)!
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'bmi', component: BmiComponent}
  
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
