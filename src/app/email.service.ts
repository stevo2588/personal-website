import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

  sendEmail(emailContent) {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    return this.http.post('/sendemail', emailContent, {headers: headers})
    .map(res => res.json());
  }        

  private handleError (error: Response) {
    // TODO: log on server
    console.error('Error in email post request: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
