import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ShowterrentsService } from '../Services/showterrents.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
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
  ids = [1, 3, 2, 4];
  selectedvalues: string[] = ['Heraizen_1', 'Tenant_id_1', 'AITE_Eng']
  createapi: false;
  displayedColumns: string[] = ['sl', 'tenantid', 'email', 'service', 'edit'];
  selectterrent: string;
  selectedterrents: string;
  generateapikey: FormGroup;
  dataSource = new MatTableDataSource<TerrentDetail>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private showterrentsservice: ShowterrentsService, private fb: FormBuilder) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {

    this.generateapikey = this.fb.group({
      tenantid: ['', [Validators.required]],
      email: ['', [Validators.required]],
      serviceid: ['', Validators.required]
    })

    this.showterrentsservice.apiServiceDetails().subscribe(data => {
      console.log("this is data",data)
      // this.terrentdetails = data.api as TerrentDetail[];
      // this.dataSource = new MatTableDataSource(this.terrentdetails);



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
  get tenantid() {
    return this.generateapikey.get("tenantid")
  }
  get email() {
    return this.generateapikey.get('email')
  }
  get serviceid() {
    return this.generateapikey.get('serviceid')
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
  reset() {
    this.generateapikey.reset();
  }

  selectvalue() {
    console.log(this.selectterrent)
  }


  back() {
    this.createapi = false;
    this.flag = true;
  }
  openstatus() {

  }

  givedata() {
    this.selectedterrents = this.selectterrent
    this.dataSource.data.filter(data => {

      if (data.tenantId == this.selectedterrents) {
        this.dataSource = new MatTableDataSource(this.terrentdetails)
      }
    })
  }

}


