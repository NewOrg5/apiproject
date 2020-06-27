import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShowterrentsService } from '../Services/showterrents.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
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
  ids = [1,3,2,4];

  displayedColumns: string[] = ['sl', 'terrentid', 'email', 'service', 'edit'];

  dataSource = new MatTableDataSource<TerrentDetail>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private showterrentsservice: ShowterrentsService, private fb: FormBuilder) { }
  generateapikey = this.fb.group({
    terrentId: ['', [Validators.required]],
    email: ['', [Validators.required]],
    serviceid: ['', Validators.required]
  })

  ngOnInit(): void {
    this.showterrentsservice.getterrentdetails().subscribe(data => {
      console.log(data)
      this.terrentdetails = data.api as TerrentDetail[];
      this.dataSource = new MatTableDataSource(this.terrentdetails);
    })
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

  deactivate(index) {
    console.log(this.terrentdetails[index]);
    this.terrentdetails.splice(index, 1);
    console.log(this.terrentdetails);
    this.dataSource = new MatTableDataSource(this.terrentdetails);
  }

  submit() {
    this.terrentdetails.push(this.generateapikey.value);
    this.dataSource = new MatTableDataSource(this.terrentdetails);
    this.generateapikey.reset();
  }

}


