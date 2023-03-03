import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http:HttpClient) { }
  //Store Table Get data
  GetStoreData(){
    return this.http.get("https://localhost:7167/api/Store/GetStores");
  }
  //Store Table Post data
  PostStoreData(data:any){
    return this.http.post("https://localhost:7167/api/Store/AddStore",data)
    }
  //Category Table Get data
  GetCategoryData(){
    return this.http.get("https://localhost:7167/api/Category/Get");
  }
  //Category Table Post data
  PostCategoryData(data:any){
    return this.http.post("https://localhost:7167/api/Category/api/CreateCategory",data)
  }
  

}
