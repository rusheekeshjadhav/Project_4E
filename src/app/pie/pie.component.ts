import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

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

  pieChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

  // CHART COLOR.
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
      ]
    }
  ]

  pieChartData: any = [
    {
      data: [10, 40, 20, 60, 50]
    }
  ];

  ngOnInit() {
    this.httpService.get('./assets/sales.json', { responseType: 'json' }).subscribe(
      data => {
        this.pieChartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onChartClick(event: any) {
    console.log(event);
  }

}
