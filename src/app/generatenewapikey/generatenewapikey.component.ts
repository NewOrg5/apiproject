import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ShowterrentsService } from '../Services/showterrents.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DhiApiKeyBasicDTO } from '../Shared/basicdetails';
import { CommentStmt } from '@angular/compiler';
import { keydetails } from '../Shared/keydetails';

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
  terrentdetails: DhiApiKeyBasicDTO[] = [];
  ids = [1, 3, 2, 4];
  selectedvalues: string[] = ['Heraizen_1', 'Tenant_id_1', 'AITE_Eng']
  createapi: false;
  displayedColumns: string[] = ['sl', 'tenantId', 'email', 'serviceId', 'edit'];
  selectterrent: string;
  selectedterrents: string;
  apikey:string
  generateapikey: FormGroup;
  showApiKey:boolean=false
  keyDetails:keydetails[]
  tenantId:string[]=[]
  serviceName:string[]=[]
  search_value:string

  dataSource = new MatTableDataSource<DhiApiKeyBasicDTO>();
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private showtenantdetails: ShowterrentsService, private fb: FormBuilder) { }
  
   
  ngOnInit(): void {

    this.allservices()
this.showtenantdetails.getServiceNames().subscribe(services=>
     this.serviceName=services
  )
    this.generateapikey = this.fb.group({
      tenantId: ['', [Validators.required]],
      email: ['', [Validators.required]],
      serviceId: ['', Validators.required]
    })

    this.showtenantdetails.getAllTenantIds().subscribe(tenantid=>{
      this.tenantId=tenantid
    }
      )
      
  }

 
    allservices(){
    this.showtenantdetails.getTenantDetails().subscribe(data => {
      console.log("this is data",data)
    
      this.terrentdetails = data as DhiApiKeyBasicDTO[];
      this.dataSource = new MatTableDataSource(this.terrentdetails);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

)
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
    return this.generateapikey.get("tenantId")
  }
  get email() {
    return this.generateapikey.get('email')
  }
  get serviceid() {
    return this.generateapikey.get('serviceId')
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
    search() {
      if (this.search_value.length > 0) {
        this.keyDetails = [];
        this.showtenantdetails.searchString(this.search_value).subscribe(res => {
          this.dataSource = new MatTableDataSource(res);
        });
      } else {
        this.allservices();
      }
    }
  
  
  deactivate(index:string) {
    status="INACTIVE"
    this.showtenantdetails.updateStatus(index, status).subscribe(resp => {
      if (resp) {
        this.allservices()
      }
   
  }
    )
}

  submit() {
    // this.terrentdetails.push(this.generateapikey.value);
    // this.dataSource = new MatTableDataSource(this.terrentdetails);
    // this.generateapikey.reset();
    this.showtenantdetails.createNewApiKey(this.generateapikey.value).subscribe(data=>{
    if(data){
      this.allservices();
      this.apikey=data['apiKey']
      console.log('token',this.apikey);
      this.showApiKey=true
    }
      });
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

  onChangeTenantId(selectedvalue: string) {
    console.log(selectedvalue)
    if (selectedvalue) {
      this.showtenantdetails.apiServiceByTenantId(selectedvalue).subscribe(res => {
        if (res) {
         this.dataSource = new MatTableDataSource(res);
        }
      });
    } else {
      this.allservices();
    }
  }

  
}


