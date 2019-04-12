import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../shared/models/user.registration.interface';
import { UserService } from '../../shared/services/user.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  error: string;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
   
    if (valid) {

      this.userService.register(value.email, value.password, value.passwordConfirm, value.year)
        .subscribe(x => {
          if (x) {
            this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
          }
        },
          err => {
            debugger
             this.error = this.userService.handleError(err);
 
          }
        )
    }
  }
}
