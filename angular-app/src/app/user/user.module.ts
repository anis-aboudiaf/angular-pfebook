import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserMaterialModule } from './user-materiel-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddArticleComponent } from './add-article/add-article.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, SettingsComponent, AddArticleComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
