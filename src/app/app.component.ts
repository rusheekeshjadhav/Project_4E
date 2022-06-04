import { Component } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private ts: TokenService){}

  displayNavbar(): boolean{
    let token = this.ts.getToken();
    if(token === null) return false;
    else return true;
  }
}
