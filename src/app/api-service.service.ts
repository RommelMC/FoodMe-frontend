import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  getBusinesses(location){
      // var key = "1RYjgVkBwm8Xb0FFyVt_JwiI0IDTM64FXPuTOikJY948VqQFoa0EKFR9ClpbHgT_PgcgyWHqCiqqzxvkHNBvfyyCS0tCmS6LiX1CTSTKnxEBIoOfnU84hzBtlGrVW3Yx"
      // var headers = new HttpHeaders().set('Authorization', 'Bearer '+key)
      var url = 'yelp/restaurants/location/'+location.location+'/radius/'+location.radius+'/price/'+location.price

      var data = this._http.get(url).toPromise();
      console.log(data);
      return data;
  }

  getReviews(id){
    var data = this._http.get('yelp/restaurants/reviews/'+id).toPromise();
    console.log(data);
    return data;
  }
  
}
