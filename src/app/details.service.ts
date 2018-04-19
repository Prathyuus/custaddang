import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DetailsService {
private query: string;
private API_URL : string="http://10.151.60.178:8012/customer/kkdCust1001";
private perPage:string= "&per_page=10";
  constructor(private http: Http) { }
 getDetails(){
   return this.http.get(this.API_URL)
   .map(res => res.json());
 }
}
