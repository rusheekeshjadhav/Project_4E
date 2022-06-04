import { Component, OnInit } from '@angular/core';
import { KpiService } from '../kpi.service';

@Component({
  selector: 'app-details-kpi',
  templateUrl: './details-kpi.component.html',
  styleUrls: ['./details-kpi.component.css']
})
export class DetailsKpiComponent implements OnInit {

  constructor(private ks: KpiService) { }

  list: any = [];
  show: boolean = false;
  elementArray: any = [];

  ngOnInit(): void {
  }

  showDetails($event: any) {
    // console.log($event)
    this.elementArray = [];
    this.show = true;
    this.elementArray.push($event);
    // console.log($event._id);
    // console.log(this.elementArray);
  }

}
