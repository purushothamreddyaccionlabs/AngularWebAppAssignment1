import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-api-dialog',
  templateUrl: './api-dialog.component.html',
  styleUrls: ['./api-dialog.component.scss']
})
export class ApiDialogComponent {

  form: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogref:MatDialogRef<ApiDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit() {
    this.apiformbuild();
  }

  apiformbuild() {
    this.form = this.fb.group({
      storename: ['', Validators.required]
    })
  }

  submitdata(){
    this.dialogref.close({
      data:{
        storename:this.form.get("storename")
      }
    })
  }








}
