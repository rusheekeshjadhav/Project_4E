import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { KpiService } from '../kpi.service';

@Component({
  selector: 'app-list-kpi',
  templateUrl: './list-kpi.component.html',
  styleUrls: ['./list-kpi.component.css']
})
export class ListKpiComponent implements OnInit {

  constructor(private ks: KpiService) { }

  list: any = [];
  show: boolean = false;

  @Output() kpiItem = new EventEmitter();

  ngOnInit(): void {
    this.ks.listKPI().subscribe(data => {
      // console.log(data);
      data.response.forEach((element: any) => {
        this.list.push(element);
      });
    });
    // console.log(this.list);
  }

  showDetails(item: any){
    // console.log(item);
    this.kpiItem.emit(item);
  }
}
