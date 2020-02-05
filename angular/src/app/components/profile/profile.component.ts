import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../core/user/user.service';
import { UserModel } from '../../core/user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  public userProfileDetails: UserModel
    
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
      this.userService.getUserProfile()
          .subscribe((res: any) => {
              this.userProfileDetails = res['user']
          })
  }

  public logout() {
      this.userService.logout()
      this.router.navigate(['Login'])
  }
}
