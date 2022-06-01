import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ts: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (this.ts.getToken() !== null)
      this.router.navigate(['/dash']);
  }

}
