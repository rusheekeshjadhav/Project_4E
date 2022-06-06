import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { HierarchyNode } from '../hierarchy/hierarchy.component';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  title = 'pie-chart';
  constructor(private httpService: HttpClient) { }

  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
  }

  @Input() dataNode!: any;
  

  pieChartLabels = ['Not Defined KPI', 'Monitored KPI', 'Not Monitored KPI', 'Not On Track KPI', 'On Track KPI'];

  // CHART COLOR.
  pieChartColor: any = [
    {
      backgroundColor: [
        'rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
      ]
    }
  ]

  pieChartData: any = [];

  ngOnInit() {
    this.pieChartData.push({
      data: [this.dataNode.notDefinedKPI, this.dataNode.kpiMonitored, this.dataNode.notMonitored, this.dataNode.notOnTrack, this.dataNode.onTrack]
    });
  }

  onChartClick(event: any) {
    console.log(this.dataNode);
  }

}
