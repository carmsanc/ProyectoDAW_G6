import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      'nombre' : [null, Validators.required],
      'tipoF' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'interes' : [null, Validators.required]

    });
  }

  contactus(formData: NgForm){
    console.log(formData)
  }

}
