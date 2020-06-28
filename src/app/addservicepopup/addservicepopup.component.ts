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
  constructor(private fb:FormBuilder,private dialog: MatDialogRef<AddservicepopupComponent>) { }

  ngOnInit(): void {
    this.addservicepopup=this.fb.group({
      servicename:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }

add(){
 
  this.dialog.close({0:true,1:this.addservicepopup});
}
get servicename()
{
  return this.addservicepopup.get('servicename');
}
get description()
{
  return this.addservicepopup.get('description');
}

close() {
  this.dialog.close(false);
}


}
