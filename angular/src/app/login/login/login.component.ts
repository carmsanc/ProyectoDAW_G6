import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  input;
  private router: Router;
 
 
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.input ={
      username: '',
      password: ''
    };
  }

 
  onLogin(){
    this.userService.loginUser(this.input).subscribe(
      
      response => {
        console.log(response);
        alert('User: ' + this.input.username + ' ingreso correctamente');
        this.router.navigate(['/Perfil']);
      },
      error => {
        console.log('error',error);
      }

      
    )
  }

  
}
