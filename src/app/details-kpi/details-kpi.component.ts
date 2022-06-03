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
    this.ks.listKPI().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
        // console.log(typeof element);
        this.list.push(element);
      });
      console.log(this.list);
    });
  }

  showDetails($event: any) {
    this.elementArray = [];
    this.show = !this.show;

    this.elementArray.push($event);
    // console.log($event._id);
    // console.log(this.elementArray);
  }

}
