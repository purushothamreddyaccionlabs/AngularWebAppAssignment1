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
  categoryform: any = FormGroup;
  catstoreform: any = FormGroup;
  storeformid: any;
  storeGetData: any;
  selectedValue:any;
  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<ApiDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.apiformbuild();
    this.forcategory();
    this.forCatstore();
  }
  //This is for Store Table
  apiformbuild() {
    this.form = this.fb.group({
      storename: ['', Validators.required]
    })
    // Getting formid from parent component
    this.storeformid = this.data.FormId;

  }
  //This is for category Table
  forcategory() {
    this.categoryform = this.fb.group({
      categoryname: ['', Validators.required]
    })
    // Getting formid from parent component
    this.storeformid = this.data.FormId;
  }
  //This is for CatStore Table
  forCatstore() {
    this.catstoreform = this.fb.group({
      storeId: ['', Validators.required],
      catId: ['', Validators.required]
    })
    this.storeformid = this.data.FormId;
    this.storeGetData = this.data.storeData;
    console.log(this.storeformid);
    console.log(this.storeGetData);
  }



  submitstoredata() {        // For Store
    this.dialogref.close({
      data: {
        storename: this.form.get("storename") // Sending data to parent component
      }
    })
  }
  submitcategory() {
    this.dialogref.close({   // For Category
      data: {
        categoryname: this.categoryform.get("categoryname") // Sending data to parent component
      }
    })
  }








}
