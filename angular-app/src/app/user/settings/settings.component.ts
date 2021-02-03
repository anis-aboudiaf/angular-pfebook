import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  hide = true;
  confirm_hide = true;
  registerFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  });
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUserSettings();
  }

  registerUser() {
    console.log(this.registerFormGroup.value);
    this.userService.updateUser(this.userService.getUserId(), this.registerFormGroup.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['profile'])
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getUserSettings() {
    this.userService.getUserProfil(this.userService.getUserId()).subscribe(
      (res: any) => {
        console.log(res)
        this.registerFormGroup = new FormGroup({
          name: new FormControl(res['name'], [Validators.required]),
          email: new FormControl(res['email'], [Validators.required, Validators.email]),
          password: new FormControl('', Validators.required),
          confirm_password: new FormControl('', Validators.required),
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
