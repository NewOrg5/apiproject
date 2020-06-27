import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShowterrentsService } from '../Services/showterrents.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TerrentDetail } from '../Shared/showdetails.model';

@Component({
  selector: 'app-generatenewapikey',
  templateUrl: './generatenewapikey.component.html',
  styleUrls: ['./generatenewapikey.component.css']
})
export class GeneratenewapikeyComponent implements OnInit {
  flag: boolean = true;
  rowsOnPage = 5;
  count: Number = 5;
  counterList = [5, 10, 15, 20];
  p: Number = 1;
  terrentdetails: TerrentDetail[] = [];

  displayedColumns: string[] = ['sl', 'terrentid', 'email', 'service', 'edit'];

  dataSource = new MatTableDataSource<TerrentDetail>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private showterrentsservice: ShowterrentsService, private fb: FormBuilder) { }
  generateapikey = this.fb.group({
    terrentId: ['', [Validators.required]],
    email: ['', [Validators.required]],
    serviceid: ['', Validators.required]
  })

  ngOnInit(): void {
    this.showterrentsservice.getterrentdetails().subscribe(data => {
      this.terrentdetails = data as TerrentDetail[];
      this.dataSource = new MatTableDataSource(this.terrentdetails);
    })
  }

  test() {
    console.log(this.terrentdetails);
    console.log(this.dataSource);
  }

  createapikey() {
    if (this.flag == false) {
      this.flag = true;
    }
    else {
      this.flag = false;
    }
  }
  get terrentId() {
    return this.generateapikey.get("terrentId")
  }
  get email() {
    return this.generateapikey.get('email')
  }
  get serviceid() {
    return this.generateapikey.get('serviceid')
  }
}


