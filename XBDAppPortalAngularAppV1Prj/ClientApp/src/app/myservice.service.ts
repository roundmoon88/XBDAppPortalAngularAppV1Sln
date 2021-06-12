import { Injectable } from '@angular/core';

//Richard Added
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  //private apiurl = "https://localhost:44380/weatherforecast";

  constructor(private http: HttpClient) { }

  //testing method
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
  //getData() {//this method would be removed later
  //  return this.http.get(this.apiurl);
  //}

  getBaseUrl() {
    let baseUrl = document.getElementsByTagName('base')[0].href;
    return baseUrl;
  }

}
