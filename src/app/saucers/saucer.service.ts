import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class SaucerService{
	
	constructor(private http: Http){}
	
	apiUrl = environment.API_URL+'restaurants/';
	getSaucers(id: string){
		return this.http.get(this.apiUrl+id+'/saucers')
		.map((response: Response) => response.json())
		.toPromise();
		
	}
	
	getSaucer(restaurantId: string, saucerId){
		return this.http.get(this.apiUrl+restaurantId+'/saucers/'+saucerId)
		.map((response: Response) => response.json())
		.toPromise();
		
	}
	
}