import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KpiService } from '../kpi.service';

@Component({
  selector: 'app-create-kpi',
  templateUrl: './create-kpi.component.html',
  styleUrls: ['./create-kpi.component.css']
})
export class CreateKPIComponent implements OnInit {

  constructor(private ks: KpiService, private router: Router) { }

  kpiForm = new FormGroup({

    title: new FormControl('', [Validators.required]),
    departmentId: new FormControl('', [Validators.required]),
    perspective: new FormControl('', [Validators.required]),
    goalDescription: new FormControl('', [Validators.required]),
    remark: new FormControl('', [Validators.required]),
    dataCaptureFrequency: new FormControl('', [Validators.required]),
    reviewFrequency: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    perspectivePrefix: new FormControl('', [Validators.required]),

    financialYearStart: new FormControl(1648751400000),
    financialYearEnd: new FormControl(1680287399000),
    directionOfGoodness: new FormControl("Up"),
    isTypeKPI: new FormControl(true),
    annualTarget: new FormControl(100),
    actionLimit: new FormControl("MANUAL"),
    parentId: new FormControl(null),
    ytdCalculation: new FormControl("SUM"),
    weightage: new FormControl(1),
    unitOfMeasurement: new FormControl("606573e173d7e41e2e59a4ab"),
    goalFormula: new FormControl(null),
    isActive: new FormControl(true),
    dataAggregationFrequency: new FormControl("62833d7b412ac9eebe3a3c17"),
    dataAggregationMethod: new FormControl("SUM"),

    captureData: new FormControl([
      {
        "target": 0,
        "lower": 0,
        "upper": 0,
        "startDate": "2022-05-01T00:00:00",
        "endDate": "2022-05-31T23:59:59",
        "indicator": 2,
        "disabled": false,
        "upperValueType": "ABSOLUTE",
        "lowerValueType": "ABSOLUTE"
      }
    ]),

    owners: new FormControl({
      "individuals": [
        {
          "employeeId": "rusheekesh.jadhav",
          "isPrimary": true
        }
      ]
    }),

    viewers: new FormControl({
      "individuals": [],
      "groups": []
    })
  });

  dept: any = [];
  pers: any = [];
  dataCap: any = [];
  review: any = [];
  kpiType: any = [];
  kpiCategory: any = [];

  perspectivePrefix: string = '';

  ngOnInit(): void {
    this.ks.getDepartment().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element.name+" "+element.id);
        this.dept.push(element);
      });
    });

    this.ks.getPerspective().subscribe(data => {
      data.response.forEach((element: any) => {
        console.log(element);
        this.pers.push(element);
      });
    });

    this.ks.getDataCaptureFrequency().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
        this.dataCap.push(element);
      });
    });

    this.ks.getReviewFrequency().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
        this.review.push(element);
      });
    });

    this.ks.getKpiType().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
        this.kpiType.push(element);
      });
    });

    this.ks.getCategory().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
        this.kpiCategory.push(element);
      });
    });
  }

  submit() {
    console.log(this.kpiForm.valid);
    this.ks.createKPI(this.kpiForm.value).subscribe((succ) => {
      console.log(succ),
        (err: any) => {
          console.log(err);
        }
    });
    alert("KPI created succeccfully");
    this.router.navigate(['/dash']);
  }

  checkOrder() {
    return this.dataCap.find((element: { _id: any; }) => {
      return element._id === this.kpiForm.value['dataCaptureFrequency'];
    }).order;
  }

  setPerspectivePrefix(){
    this.perspectivePrefix = this.pers.find((element: { _id: any; }) => {
      return element._id === this.kpiForm.value['perspective'];
    }).perspectivePrefix;
  }

  filterOrder() {
    if (this.kpiForm.value['dataCaptureFrequency'] !== '')
      return this.review.filter((x: { order: number; }) => x.order >= this.checkOrder());
  }
}
