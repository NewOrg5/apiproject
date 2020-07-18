import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { dhiApiKeyServiceDetailsDTO } from 'src/app/Shared/apiKeyServiceDetails';
import { ShowterrentsService } from 'src/app/Services/showterrents.service';

@Component({
  selector: 'app-addservicepopup',
  templateUrl: './addservicepopup.component.html',
  styleUrls: ['./addservicepopup.component.css']
})
export class AddservicepopupComponent implements OnInit {
  addservicepopup: FormGroup
  constructor(private fb: FormBuilder, private dialog: MatDialogRef<AddservicepopupComponent>,private addapiservice:ShowterrentsService) { }

  ngOnInit(): void {
    this.addservicepopup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  add() {
    console.log(this.addservicepopup.value)
    this.addapiservice.addNewApiService(this.addservicepopup.value).subscribe(data=>
      console.log(data))

    // this.dialog.close({data: this.addservicepopup });
  }
  

  get servicename() {
    return this.addservicepopup.get('name');
  }
  get description() {
    return this.addservicepopup.get('description');
  }

  close() {
    this.dialog.close(false);
  }


}
