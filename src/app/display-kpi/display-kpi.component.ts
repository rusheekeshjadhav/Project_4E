import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import { DetailsKpiComponent } from '../details-kpi/details-kpi.component';

@Component({
  selector: 'app-display-kpi',
  templateUrl: './display-kpi.component.html',
  styleUrls: ['./display-kpi.component.css']
})
export class DisplayKpiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedKpiItem: boolean = false;
  @ViewChild(DetailsKpiComponent) details!: DetailsKpiComponent;

  selectedKpi($event: any){
    // console.log($event);
    this.details.showDetails($event);
  }
}
