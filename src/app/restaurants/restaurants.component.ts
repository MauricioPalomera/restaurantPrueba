import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {
  restaurants =[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    
    //let restaurantId ='5886a892e1e724000427aea0';
    
    this.restaurantService.getRestaurants().then( (response) =>  this.restaurants = response);
   
    
    
  }

}
