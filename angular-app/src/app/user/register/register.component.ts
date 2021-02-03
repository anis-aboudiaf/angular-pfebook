import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  confirm_hide = true;
  registerFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  });
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registerFormGroup.value);
    this.userService.registerUser(this.registerFormGroup.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['login']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
