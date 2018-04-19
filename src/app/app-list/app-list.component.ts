import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
details: any[];
  constructor(private detailsService : DetailsService) { }
searchDetails(){
  return this.detailsService.getDetails().subscribe(
    data => console.log(data),
    error=> console.log(error),
    () => console.log("Done")
  )
}
  ngOnInit() {
  }

}
