import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    perspectivePrefix: new FormControl(''),
    financialYearStart: new FormControl('0', [Validators.required]),
    financialYearEnd: new FormControl(''),



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

    captureData: new FormArray([]),

    // captureData: new FormControl([
    //   {
    //     "target": 0,
    //     "lower": 0,
    //     "upper": 0,
    //     "startDate": "2022-05-01T00:00:00",
    //     "endDate": "2022-05-31T23:59:59",
    //     "indicator": 2,
    //     "disabled": false,
    //     "upperValueType": "ABSOLUTE",
    //     "lowerValueType": "ABSOLUTE"
    //   }
    // ]),

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
  years: any = [];

  months: any[] = [
    { id: 1, name: "JAN" },
    { id: 2, name: "FEB" },
    { id: 3, name: "MAR" },
    { id: 4, name: "APR" },
    { id: 5, name: "MAY" },
    { id: 6, name: "JUN" },
    { id: 7, name: "JUL" },
    { id: 8, name: "AUG" },
    { id: 9, name: "SEP" },
    { id: 10, name: "OCT" },
    { id: 11, name: "NOV" },
    { id: 12, name: "DEC" }
  ];

  selected: any[] = [];

  perspectivePrefix: string = '';


  ngOnInit(): void {
    this.ks.getDepartment().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(typeof element+" "+element.name+" "+element.id);
        this.dept.push(element);
      });
    });

    this.ks.getPerspective().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
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

    this.ks.getYear().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element);
        this.years.push(element);
      });
    });

  }

  submit() {
    // console.log(this.kpiForm.valid);
    this.ks.createKPI(this.kpiForm.value).subscribe((succ) => {
      console.log(succ);
      alert("KPI Created Succeccfully !!!");
    },
      (err) => {
        console.log(err);
        alert("KPI Creation Failed !!!");
      });
    // alert("KPI Created Succeccfully !!!");
    this.router.navigate(['/dash']);
  }

  setPerspectivePrefix() {
    this.perspectivePrefix = this.pers.find((element: { _id: any; }) => {
      return element._id === this.kpiForm.value['perspective'];
    }).perspectivePrefix;
    // console.log(this.perspectivePrefix)
    // this.kpiForm.value['perspectivePrefix'] = this.perspectivePrefix;

    this.kpiForm.controls['perspectivePrefix'].setValue(this.perspectivePrefix);
    console.log(this.kpiForm.value);
  }

  selectedYear() {
    this.kpiForm.controls['financialYearEnd'].setValue(this.years.find((element: { startUnix: any; }) => {
      return element.startUnix == this.kpiForm.value['financialYearStart'];
    }).endUnix.toString());
    // console.log(this.kpiForm.value['financialYearEnd']);
    console.log(this.kpiForm.value);
  }

  checkOrder() {
    return this.dataCap.find((element: { _id: any; }) => {
      return element._id === this.kpiForm.value['dataCaptureFrequency'];
    }).order;
  }

  filterOrder() {
    if (this.kpiForm.value['dataCaptureFrequency'] !== '')
      if (this.checkOrder() < 5)
        return this.review.filter((x: { order: number; }) => x.order > this.checkOrder());
      else
        return this.review.filter((x: { order: number; }) => x.order > (this.checkOrder() - 1));
  }

  filterYear() {
    return this.years.filter((x: { endUnix: number; }) => x.endUnix >= (new Date()).getTime());
  }

  createFormArrayData(): FormGroup {
    let captureDataFormGroup = new FormGroup({
      target: new FormControl(0),
      lower: new FormControl(0),
      upper: new FormControl(0),
      startDate: new FormControl('2022-05-01T00:00:00'),
      endDate: new FormControl('2022-05-31T23:59:59'),
      indicator: new FormControl(2),
      disabled: new FormControl(false),
      upperValueType: new FormControl('ABSOLUTE'),
      lowerValueType: new FormControl('ABSOLUTE')
    });

    return captureDataFormGroup;
  }

  addData($event: any){
    this.captureData.push(this.createFormArrayData());
    // console.log(this.selected);
  }

  get captureData(){
    return this.kpiForm.get('captureData') as FormArray;
  }


}
