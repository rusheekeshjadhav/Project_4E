import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KpiService } from '../kpi.service';

@Component({
  selector: 'app-create-kpi',
  templateUrl: './create-kpi.component.html',
  styleUrls: ['./create-kpi.component.css']
})
export class CreateKPIComponent implements OnInit {

  constructor(private ks: KpiService) { }

  kpiForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    departmentId: new FormControl('', [Validators.required]),
    perspective: new FormControl('', [Validators.required]),
    goalDescription: new FormControl('', [Validators.required]),
    remark: new FormControl('', [Validators.required]),
    dataCaptureFrequency: new FormControl('', [Validators.required]),
    reviewFrequency: new FormControl('', [Validators.required]),
  });

  dep: any = [];

  ngOnInit(): void {
    this.ks.getDept().subscribe(data => {
      console.log(data);
    });
  }

  submit() {
    console.log(this.kpiForm.valid);
  }
}
