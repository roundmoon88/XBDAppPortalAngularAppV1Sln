import { Component } from '@angular/core';
//Richard Added
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from './../../myservice.service'
  

@Component({
    selector: 'app-portal-list3',
    templateUrl: './portal-list3.component.html',
    styleUrls: ['./portal-list3.component.css']
})
/** portal-list3 component*/
export class PortalList3Component {
  public appPortals: RiboAppPortal[] = [];
  public filterApps: Filter[] = [];
  public filterAppTypes: Filter[] = [];
  public appSelected: number = 0;
  public appTypeSelected: number = 0;
  private baseUrl: string = "";

    /** portal-list3 ctor */
  constructor(protected http: HttpClient, private myservice: MyserviceService
  ) {
    //https://localhost:44380/api/RiboAppPortals/0/
    this.baseUrl = this.myservice.getBaseUrl();

    //1) load all Ribo App protals data
    this.getAppPortals(0, 0);

    //2) loadApp filters
    this.loadFilters(1);

    //3) load AppType filters
    this.loadFilters(2);

      //let portal = <RiboAppPortal>({
      //  appId: 1,
      //  appName: "My App",
      //  appDes: "",
      //  appTypeId: 1,
      //  appType: "Asp.net"
      //});
      //this.appPortals.push(portal);

      //portal = <RiboAppPortal>({
      //  appId: 2,
      //  appName: "Source Document",
      //  appDes: "",
      //  appTypeId: 1,
      //  appType: "Asp.net"
      //});
      //this.appPortals.push(portal);

      //portal = <RiboAppPortal>({
      //  appId: 3,
      //  appName: "Job Seeking Management",
      //  appDes: "",
      //  appTypeId: 1,
      //  appType: "Asp.net"
      //});
      //this.appPortals.push(portal);

      //portal = <RiboAppPortal>({
      //  appId: 7,
      //  appName: "Ribo Portal",
      //  appDes: "",
      //  appTypeId: 4,
      //  appType: "Angular"
      //});
      //this.appPortals.push(portal);
  }
  onGoClick() {
    this.getAppPortals(this.appSelected, this.appTypeSelected);
  }
  getAppPortals(appId: number, appTypeId: number) {
    let url = this.baseUrl + "api/RiboAppPortals/" + appId + "/" + appTypeId + "/";
    //console.log("L97:", url);

    this.http.get<RiboAppPortal[]>(url).subscribe(
      result => {
        this.appPortals = result;
        console.log("this.appPortals:", this.appPortals);
      },
      error => console.error(error),
      () => console.log("this.appPortals:", "finish")
    );
  }
  loadFilters(filterInd: number /*1: App; 2: AppType*/) {
    let url = this.baseUrl + "api/FilterList/" + filterInd + "/";
    //console.log("L109:", url);

    this.http.get<Filter[]>(url).subscribe(
      result => {
        if (filterInd == 1) {
          this.filterApps = result;
          console.log("this.filterApps", this.filterApps);
        }
        else {
          this.filterAppTypes = result;
          console.log("this.filterAppTypes", this.filterAppTypes);
        }
        
      },
      error => console.error(error),
      () => console.log("this.filterAppTypes finish")

    );
  }

}


interface RiboAppPortal {
  appId: number;
  appName: string;
  appDes: string;
  appTypeId: number;
  appType: string;
}

interface Filter {
  itemId: number;
  item: string;
  filterName: string;
  selected: boolean;
}
