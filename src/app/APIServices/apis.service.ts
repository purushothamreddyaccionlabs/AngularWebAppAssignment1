import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http:HttpClient) { }

  GetStoreData(){
    return this.http.get("https://localhost:7167/api/Store/GetStores");
  }
  PostStoreData(data:any){
    return this.http.post("https://localhost:7167/api/Store/AddStore",data)
    }


}
