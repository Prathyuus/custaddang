import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  //details = [{"kkdCustId":"KKDCUST1001","mobileNo":"8098433601","password":"Aaaaaaaa1@","firstName":"string","lastName":"string","addresses":[{"pincode":7899,"addressLine":"string","city":"string","district":"string","state":"string","primary":false}],"primaryAddress":{"pincode":1222,"addressLine":"string","city":"string","district":"string","state":"string","primary":false},"role":"Farmer"}];
details:any[];
  constructor(private detailsService : DetailsService) { }
  handleSuccess(data){
this.details=data.addresses;
console.log(data.addresses);
  }
searchDetails(){
  return this.detailsService.getDetails().subscribe(
    data => this.handleSuccess(data),
    error=> console.log(error),
    () => console.log("Done")
  )
}
  ngOnInit() {
  }

}
