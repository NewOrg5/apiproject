import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addservicepopup',
  templateUrl: './addservicepopup.component.html',
  styleUrls: ['./addservicepopup.component.css']
})
export class AddservicepopupComponent implements OnInit {
  addservicepopup:FormGroup
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<AddservicepopupComponent>) { }

  ngOnInit(): void {
    this.addservicepopup=this.fb.group({
      servicename:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }
  close() {
    this.dialogRef.close();
}
add(){

}
get servicename()
{
  return this.addservicepopup.get('servicename');
}
get description()
{
  return this.addservicepopup.get('description');
}

}
