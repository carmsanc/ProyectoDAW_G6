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
      'username' : [null, Validators.required],
      'direccion' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
      'tipof': [null, Validators.required],
      'experiencia' : [null, Validators.required]

    });
    this.register = {
        username: '',
        password: '',
        email:'',
        tipof: '',
        experiencia: ''
    };
  }

  signup(formData: NgForm){
    console.log(formData);
    
  }

}
