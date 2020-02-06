import { Component, OnInit, Inject } from '@angular/core';
import { FavoritosService } from "../../services/favoritos.service";
import { UserService } from '../../core/user/user.service';
import { UserModel } from '../../core/user/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './json.service';


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
  private http: HttpClient
  public userProfileDetails: UserModel;
  animal: string;
  name: string;

 JsonData=[]



  constructor(private userService: UserService, public dialog: MatDialog,public json: JsonService) 
  { 
    this.json.getJson("http://localhost:8000/api/fav/?format=json").subscribe((res : any) => {
    console.log(res);
    var items=[]
    
    this.JsonData = res;
    console.log(this.JsonData[0]);
    
    for(let key in this.JsonData)
    if(this.JsonData.hasOwnProperty(key))
        items.push(this.JsonData[key]);
    
    
    
    });
  }
  

  ngOnInit() {
    this.userService.getUserProfile()
    .subscribe((res: any) => {
        this.userProfileDetails = res['user']
    })
  }
   public deleteCard(id) {
    console.log("Borrando..");
    this.json.deleteJson("http://localhost:8000/api/fav/"+id).subscribe((res : any) => {
    console.log(res); 
    
    });
    console.log(id);
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



  
  
