import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { UserEmbeddedResponse } from './usersEmbeddedResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	endpoint = 'http://localhost:9999/api/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':'application/json',
			// 'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
			// 'Access-Control-Allow-Headers': '*'
		})
	};

  	constructor(private http: HttpClient) { }

  	private extractData(res: Response){
  		let body = res;
  		return res || {};
  	}

  	getUsers(): Observable<User[]>{
  		return this.http.get<UserEmbeddedResponse>(`${this.endpoint}users`)
  			.pipe(
  				map(response => response._embedded.users)
			  );
  	}
}
