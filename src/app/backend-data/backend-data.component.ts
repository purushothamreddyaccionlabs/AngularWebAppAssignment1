import { Component } from '@angular/core';
import { ApiDialogComponent } from '../api-dialog/api-dialog.component';
import { APIsService } from '../APIServices/apis.service';
import { LoginService } from '../authService/login.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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

  storedata: any;
  dataSource: any;
  displayUName = sessionStorage.getItem("UName");
  ngOnInit() {
    this.Getdata();
  }

  //getdata from db
  Getdata(){
    this.apiservice.GetStoreData().subscribe(data => {
      this.storedata = data;
      this.dataSource = this.storedata;
    })
  }
  logoutpage() {
    this.loginsvr.logoutuser();
  }

  displayedColumns: string[] = ['id', 'storename'];

  openDialog(): void {
  let dialogRef = this.dialog.open(ApiDialogComponent,{
    width:'30%'
  })
  dialogRef.afterClosed().subscribe(create=>{
    var forPost = create.data.storename.value;
    var data ={
      storename: forPost
    }
    this.apiservice.PostStoreData(data).subscribe((res)=>{
      console.log(res);
      this.Getdata();
    });

  })

 
  

  }


}
