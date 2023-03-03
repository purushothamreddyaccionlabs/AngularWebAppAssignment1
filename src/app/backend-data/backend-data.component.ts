import { Component } from '@angular/core';
import { ApiDialogComponent } from '../api-dialog/api-dialog.component';
import { APIsService } from '../APIServices/apis.service';
import { LoginService } from '../authService/login.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-backend-data',
  templateUrl: './backend-data.component.html',
  styleUrls: ['./backend-data.component.scss']
})
export class BackendDataComponent {


  constructor(
    private loginsvr: LoginService,
    private apiservice: APIsService,
    private dialog:MatDialog
  ) { }


  storeTableData: any;
  categoryTableData:any;
  displayUName = sessionStorage.getItem("UName");

  formGroupid:any;
  ngOnInit() {
    this.Getstoredata();
  }

  //getdata from db
  Getstoredata(){
    this.apiservice.GetStoreData().subscribe(data => {
      this.storeTableData = data;
    })
    this.apiservice.GetCategoryData().subscribe(catdata =>{
      this.categoryTableData = catdata;
    })
  }



  logoutpage() {
    this.loginsvr.logoutuser();
  }


  //store table displayedColumns
  displayedColumns: string[] = ['id', 'storename'];
  //Category table categorycolumns
  categoryColumns: string[] = ['id','categoryname'];

  //For store table functionality
  openDialog(): void {
    this.formGroupid = 1;
  let dialogRef = this.dialog.open(ApiDialogComponent,{
    width:'30%',
    data:{
      FormId:this.formGroupid
    }
  })
  dialogRef.afterClosed().subscribe(create=>{
    var forPost = create.data.storename.value;
    var data ={
      storename: forPost
    }
    this.apiservice.PostStoreData(data).subscribe((res)=>{
      console.log(res);
      this.Getstoredata();
    });

  })

  }

  //For category table functionality
  openDialogforCategory():void{
    this.formGroupid = 2;
    let dialogRef = this.dialog.open(ApiDialogComponent,{
      width:'30%',
      data:{
        FormId : this.formGroupid
      }
    })

    dialogRef.afterClosed().subscribe(create=>{
      var forPost = create.data.categoryname.value;
      var data={
        categoryname:forPost
      }

      this.apiservice.PostCategoryData(data).subscribe(res=>{
        console.log(res);
        this.Getstoredata();
      })
    })
  }

  // For Category and Store table mapping
  openForMapCatStore():void{
    this.formGroupid = 3;
    let dialogRef = this.dialog.open(ApiDialogComponent,{
      width:'30%',
      data :{
          FormId : this.formGroupid,
          storeData:this.storeTableData
      },
     
    })
  }


}
