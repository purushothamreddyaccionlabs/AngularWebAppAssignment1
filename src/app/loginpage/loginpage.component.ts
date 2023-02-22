import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { LoginService } from '../authService/login.service';




@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm:any= FormGroup; //loginform declaring
  private formSubmitAttempt:boolean|undefined;

  regFormStatus = false;
  loginVsSign = false;
  regform: any = FormGroup;
  
  passwordArray:any=[
    {
      rgname:"King",
      password:"12345"
  },{
    rgname:"Venu",
    password:"12890"
  }

  ]

  registationArry:object[] = [
    {
      "rgname":"John@gmail.com",
      "rgemail":"John@gmail.com",
      "rgpassword":"Test123456"
    },    {
      "rgname":"spreddy",
      "rgemail":"spreddy@gmail.com",
      "rgpassword":"Test12345"
    },    {
      "rgname":"rajesh",
      "rgemail":"rajesh@gmail.com",
      "rgpassword":"Test123456"
    }
  ];




  // private formSubmitAttempt: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginFormBuild();
    this.regformbuilder();
    localStorage.setItem('pswArray',JSON.stringify(this.passwordArray));
    
  }

  loginFormBuild() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  regformbuilder() {
    this.regform = this.fb.group({
      regusername: ['', [Validators.required, Validators.minLength(4)]],
      reguseremail: ['', [Validators.required, Validators.email]],
      regpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

//displaying error for the input fields
  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value);
    }
    this.formSubmitAttempt = true;
   
  }

  regsubmit(){
    
    if(this.regform.status === 'INVALID'){
      this.regFormStatus = true;
    }else{
      // console.log(this.regform.value);
      var x = this.regform.get('regusername').value;
      var y = this.regform.get('reguseremail').value;
      var z = this.regform.get('regpassword').value;
      var regUser={
        "rgname":x,
        "rgemail":y,
        "rgpassword":z
      } 
      // console.log(x);
      // console.log(y);
      // console.log(z);
      this.registationArry.push(regUser);
      localStorage.setItem('regdata',JSON.stringify(this.registationArry));
      this.loginVsSign = false;

      // console.log(this.registationArry);
      
    }
  }

  signup() {
    this.loginVsSign = true;
  }
  

  gotologinpage() {
    this.loginVsSign = false;
  }

}
