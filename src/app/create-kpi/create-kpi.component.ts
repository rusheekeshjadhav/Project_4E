import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
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
    financialYearStart: new FormControl('', [Validators.required]),
    financialYearEnd: new FormControl('', [Validators.required]),


    // financialYearStart: new FormControl(1648751400000),
    // financialYearEnd: new FormControl(1680287399000),


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
  years: any = [];

  perspectivePrefix: string = '';

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit(): void {
    this.ks.getDepartment().subscribe(data => {
      data.response.forEach((element: any) => {
        // console.log(element.name+" "+element.id);
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


    this.dropdownList = [
      { item_id: 1, item_text: 'January' },
      { item_id: 2, item_text: 'February' },
      { item_id: 3, item_text: 'March' },
      { item_id: 4, item_text: 'April' },
      { item_id: 5, item_text: 'May' },
      { item_id: 6, item_text: 'June' },
      { item_id: 7, item_text: 'July' },
      { item_id: 8, item_text: 'August' },
      { item_id: 9, item_text: 'September' },
      { item_id: 10, item_text: 'October' },
      { item_id: 11, item_text: 'November' },
      { item_id: 12, item_text: 'December' }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  submit() {
    console.log(this.kpiForm.valid);
    this.ks.createKPI(this.kpiForm.value).subscribe((succ) => {
      console.log(succ),
        (err: any) => {
          console.log(err);
        }
    });
    alert("KPI Created Succeccfully !!!");
    this.router.navigate(['/dash']);
  }

  setPerspectivePrefix() {
    this.perspectivePrefix = this.pers.find((element: { _id: any; }) => {
      return element._id === this.kpiForm.value['perspective'];
    }).perspectivePrefix;
  }

  selectedYear() {
    this.kpiForm.value['financialYearEnd'] = this.years.find((element: { startUnix: any; }) => {
      return element.startUnix == this.kpiForm.value['financialYearStart'];
    }).endUnix;
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
        return this.review.filter((x: { order: number; }) => x.order > (this.checkOrder()-1));
  }

  filterYear() {
    return this.years.filter((x: { endUnix: number; }) => x.endUnix >= (new Date()).getTime());
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
