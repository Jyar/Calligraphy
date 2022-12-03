import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerAPIService {

  constructor(private http: HttpClient) { }

  async getSoccer(){

const url = '/soccer';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb50094b9fmshb5e3f3716bb2ab6p19f320jsn46a22e97df9b',
    'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
  }
};

return await fetch(url, options)
	.then((res: { json: () => any; }) => res.json())
	.then((json: any) => console.log(json))
	.catch((err: string) => console.error('error:' + err));
  }
}
