import { Component, OnInit } from '@angular/core';
import { AddservicepopupComponent } from '../addservicepopup/addservicepopup.component';
import { MatDialog,MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-addnewservices',
  templateUrl: './addnewservices.component.html',
  styleUrls: ['./addnewservices.component.css']
})
export class AddnewservicesComponent implements OnInit {
  flag:true;
  constructor(public dialog:MatDialog) { }
  addnewservice() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddservicepopupComponent, dialogConfig);
}
  ngOnInit(): void {
  }
 

}
