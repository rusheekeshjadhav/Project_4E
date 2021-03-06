import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ts: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  user = this.ts.decodeToken();

  logout() {
    this.ts.clearToken();
    this.router.navigate(['/signin']);
  }
}
