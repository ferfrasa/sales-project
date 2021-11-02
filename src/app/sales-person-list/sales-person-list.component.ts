import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {


  //create an array of objects
  salesPersonList: SalesPerson[]=[
    new SalesPerson("aNUO", "kUMAR","AMUOP@correo",40000),
    new SalesPerson("ereaNUO", "SerkUMAR","AMffUOP@correo",5000),
    new SalesPerson("ErraNUO", "SERkUMAR","AMUOggP@correo",6000),
    new SalesPerson("lerNUO", "SMAR","LOCAP@correo",6000)


  ];



  constructor() { }

  ngOnInit(): void {
  }

}
