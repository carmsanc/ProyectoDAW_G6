import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { confirmPassword } from './confirm-password.validator';
import { UserModel } from '../../core/user/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../core/user/user.service';
import { AlertService } from '../shared/components/alert/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  public registerForm: FormGroup

    @ViewChild('fullNameInput', {static: true}) public emailInput: ElementRef<HTMLInputElement>

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private alertService: AlertService) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', [
                Validators.required,
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            confirmPassword: ['', [
                Validators.required,
                Validators.minLength(6),
            ]],
            termsOfUse: [true, [
                Validators.pattern('true')
            ]],
            telefono: ['', [
                Validators.required,
            ]],
            tipof: ['', [
                Validators.required,
            ]],
            experiencia: ['', [
                Validators.required,
            ]],
        }, {
            validator: confirmPassword
        })

        this.emailInput.nativeElement.focus()
    }

    public submitUser(form: FormGroup) {
        let user: UserModel = {
            fullName: form.value['fullName'],
            email: form.value['email'],
            password: form.value['password'],
            termsOfUse: form.value['termsOfUse'],
            telefono: form.value['telefono'],
            tipof: form.value['tipof'],
            experiencia: form.value['experiencia']
        }

        this.userService.postUser(user)
            .subscribe(
                (res) => {
                    this.alertService.success('okay!')
                    this.router.navigate(['/Login'])
                },
                (err: HttpErrorResponse) => {
                    console.log(err)
                    if(err.error){
                        this.alertService.danger(err.error)
                        return
                    } 
                    this.alertService.warning('Something\'s wrong, try again. ')
                })
    }

}
