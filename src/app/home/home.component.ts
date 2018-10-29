import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  loc = {location:"", radius:10000, price:4};
  curPlace;
  categories = "";
  filters = false;
  showReviews=false;
  reviews;
  ngOnInit() {
  }

  getBusinesses(location){
    this.apiService.getBusinesses(location).then(result => {
      var business = result['businesses'][Math.floor(Math.random()*result['businesses'].length)]
      while(business == this.curPlace){
        business = result['businesses'][Math.floor(Math.random()*result['businesses'].length)]
      }
      this.curPlace = business
      this.categories=""
      for(var i = 0; i < this.curPlace.categories.length-1;i++){
        this.categories += this.curPlace.categories[i].title + ", "
      }
      this.categories += this.curPlace.categories[i].title;
      var self = this;
      var id = this.curPlace.id;
      this.apiService.getReviews(id).then(result2=>{
        self.reviews=result2;
      })
    })
  }

  
  

}
