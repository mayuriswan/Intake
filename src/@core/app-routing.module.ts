import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { LoginComponent } from 'app/login/login.component';


const routes: Routes = [
  { path: '', component: AppComponent },  // Default route to show layout
  { path: 'login', component: LoginComponent },  // Login route
  { path: '**', redirectTo: '' }  // Redirect any unknown path to the main route
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
