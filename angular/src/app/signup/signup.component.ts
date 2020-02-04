import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  register;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],

    });
    this.register = {
        username: '',
        password: '',
        email:''
    };
  }

  signup(formData: NgForm){
    console.log(formData);
    
  }

}
