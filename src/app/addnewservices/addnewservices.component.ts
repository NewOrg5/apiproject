import { Component, OnInit, ViewChild } from '@angular/core';
import { AddservicepopupComponent } from '../addservicepopup/addservicepopup.component';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { NewapiserviceService } from '../Services/newapiservice.service';
import { newapiservice } from '../Shared/newapiservice.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-addnewservices',
  templateUrl: './addnewservices.component.html',
  styleUrls: ['./addnewservices.component.css']
})
export class AddnewservicesComponent implements OnInit {
  flag: true;
  newapiinterface: newapiservice[] = [];

  displayedColumns: string[] = ['sl', 'servicename', 'description', 'delete']
  dataSource = new MatTableDataSource<newapiservice>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private newapiservice: NewapiserviceService) { }
  addnewservice() {

    const dialogConfig = this.dialog.open(AddservicepopupComponent, {
      width: '500px',
      position: { top: '5%', left: '30%' },
      disableClose: true,
    });

    dialogConfig.afterClosed().subscribe(result => {
      if (result[0]) {
        this.newapiinterface.push(result[1].value);
        this.dataSource = new MatTableDataSource(this.newapiinterface);
      }
    })
  }

  ngOnInit(): void {
    this.newapiservice.get_details().subscribe(data => {
      this.newapiinterface = data["newservice"] as newapiservice[];
      this.dataSource = new MatTableDataSource(this.newapiinterface);
    })

  }

  deleteservice(index) {
    this.newapiinterface.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.newapiinterface)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

}
