import { Component } from '@angular/core';
import { LoginService } from '../LoginService/login.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private serviece:LoginService){}

  logoutpage(){
    this.serviece.logoutuser();
  }
}
