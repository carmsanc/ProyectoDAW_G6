import { Component, OnInit, Inject } from '@angular/core';
import { FavoritosService } from "../../services/favoritos.service";
import { UserService } from '../../core/user/user.service';
import { UserModel } from '../../core/user/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChildActivationStart } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public userProfileDetails: UserModel;
  animal: string;
  name: string;

  startup1: string;
  startup2: string;
  startup3: string;

  favoritos = [{
    _id: 1,
    name: 'Lista1',
    startup1: 'Negocio1',
    startup2: 'Negocio2',
    startup3: 'Negocio3',
},{
    _id: 2,
    name: 'Lista2',
    startup1: 'Negocio1',
    startup2: 'Negocio2',
    startup3: 'Negocio3',
    
},
{
    _id: 3,
    name: 'Lista3',
    startup1: 'Negocio1',
    startup2: 'Negocio2',
    startup3: 'Negocio3',
    
},
    
];


  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUserProfile()
    .subscribe((res: any) => {
        this.userProfileDetails = res['user']
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      height: '450px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


  
  
