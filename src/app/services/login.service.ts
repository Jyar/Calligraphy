import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config, Observable , throwError } from 'rxjs';

@Injectable()
export class LoginService {
   // configDBUrl: string = window.location.protocol + '//' + window.location.host + ' /express/signup';
configDBUrl: string = '/express/signup';
    constructor(private http: HttpClient){}
   
    getLogin(message: string){
        const dbOptions  = {
            // headers: new HttpHeaders({
            //     'Accept': 'text/html, application/xhtml+xml, */*',
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // }),
            // observe: 'events' as const,
            responseType: 'text' as 'json'
        };

        console.log('url to redirect in proxy: ' + this.configDBUrl);
        return this.http.get<Observable<string>>(this.configDBUrl, dbOptions);
    }

}