import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule
  ]
})
export class UserMaterialModule { }
