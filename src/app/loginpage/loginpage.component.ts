import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm:any= FormGroup;
 
  constructor(
    private fb: FormBuilder,private router:Router
  ) { }

  ngOnInit(): void {
    this.loginFormBuild();
  }

  loginFormBuild() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(loginForm:FormGroup) {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
   

    
  }



}
