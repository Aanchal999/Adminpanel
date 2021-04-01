import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  cost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',cost: 5},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',cost: 67},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',cost: 234},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',cost: 3456},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',cost: 12345},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',cost: 123456},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',cost: 1234567},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',cost: 12345678},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',cost: 1234567800},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',cost: 12345678900},
];

@Component({
  selector: 'app-responsivetables',
  templateUrl: './responsivetables.component.html',
  styleUrls: ['./responsivetables.component.scss']
})


export class  ResponsivetablesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'cost'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
  }


  applyFilter(filterValue: Event) {
    this.dataSource.filter=((<HTMLInputElement>filterValue.target).value).toLowerCase().trim();
  }
}