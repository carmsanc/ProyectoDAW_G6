import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {  MessageService } from "../../services/message.service";
import swal from 'sweetalert';
import { UserService } from '../../core/user/user.service';
import { UserModel } from '../../core/user/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public userProfileDetails: UserModel

  constructor(private userService: UserService,public _MessageService: MessageService) {

  }
  ngOnInit() {
    this.userService.getUserProfile()
        .subscribe((res: any) => {
            this.userProfileDetails = res['user']
        })
}
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
  }
}
