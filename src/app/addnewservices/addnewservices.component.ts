import { Component, OnInit, ViewChild } from '@angular/core';
import { AddservicepopupComponent } from './addservicepopup/addservicepopup.component';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';

import { dhiApiKeyServiceDetailsDTO } from '../Shared/apiKeyServiceDetails';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ShowterrentsService } from '../Services/showterrents.service';
@Component({
  selector: 'app-addnewservices',
  templateUrl: './addnewservices.component.html',
  styleUrls: ['./addnewservices.component.css']
})
export class AddnewservicesComponent implements OnInit {
  flag: true;
  newapiinterface: dhiApiKeyServiceDetailsDTO[] = [];

  displayedColumns: string[] = ['sl', 'servicename', 'description', 'delete']
  dataSource = new MatTableDataSource<dhiApiKeyServiceDetailsDTO>();
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog, private showtenants: ShowterrentsService) { }
  addnewservice() {
    console.log("Added new service")
    const dialogConfig = this.dialog.open(AddservicepopupComponent, {
      width: '500px',
      position: { top: '5%', left: '30%' },
      disableClose: true,
    });

    dialogConfig.afterClosed().subscribe(result => {
      if(result){
      this.theApiservices();
      }
    });
  }
  
  ngOnInit(): void {
    this.theApiservices()
  }
  theApiservices() {
    this.showtenants.getAllApiServices().subscribe(data => {
      console.log(data)
      this.newapiinterface = data as dhiApiKeyServiceDetailsDTO[];
      this.dataSource = new MatTableDataSource(this.newapiinterface);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })

  }

  deleteservice(id) {
    
      this.showtenants.deleteApiService(id).subscribe(res => {
        if(res){
          this.theApiservices()
          }
        }
      
      )
    }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

}
