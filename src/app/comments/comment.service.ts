import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class CommentService{
	apiUrl = environment.API_URL+'saucers/';
	constructor(private http: Http){}
	
	
	getComments(id: string){
		return this.http.get(this.apiUrl+id+'/comments')
		.map((response: Response) => response.json())
		.toPromise();
		
	}
	
	addComment(saucerId: string, data){
		data.date= new Date().toUTCString();
		
		let body = JSON.stringify(data);
		
		return this.http.post(this.apiUrl+saucerId+'/comments',data)
		.map((response: Response) => response.json())
		.toPromise();
		
	}
}