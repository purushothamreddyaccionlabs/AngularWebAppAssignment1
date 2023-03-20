import { OverlayContainer } from '@angular/cdk/overlay';
import { Component , HostBinding} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../authService/login.service';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  

  displayUser = sessionStorage.getItem("UName");
  constructor(private serviece:LoginService,private rtr:Router, public overlaycontainer:OverlayContainer){ }

  logoutpage(){
    this.serviece.logoutuser();
  }
  gotodashboard(){
    this.rtr.navigate(['dashboard']);
  }


  imageObject = [{
    video: 'https://www.youtube.com/watch?v=BiTeY6CkSbQ',
    alt: 'youtube video'
}, {
    video: 'https://www.youtube.com/watch?v=3aH3iBp5fD0',
    alt: 'youtube video'
}, {
    video: 'https://www.youtube.com/watch?v=LXRJsPefnYo',
    alt: 'youtube video'
      }];

      availableColors = [
        { name: 'none', color: '' },
        { name: 'Primary', color: 'primary' },
        { name: 'Accent', color: 'accent' },
        { name: 'Warn', color: 'warn' }
      ];

      color = 'accent';
      mode = 'indeterminate';
      value = 50;

      currentTheme = '';
      @HostBinding('class') componentCssClass: any;

      onSetTheme(theme: any){
        this.currentTheme = theme;
        this.overlaycontainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
      }



}
