import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule.forRoot(),
  ]
})
export class LoginModule { }
