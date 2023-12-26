import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  private apiUrl = 'https://api.weatherapi.com/v1/current.json'; // Update the API URL to use HTTPS
  private apiKey = 'ef3dbfaf5994498d9ac230453232512';

  constructor(private http: HttpClient) {}

  buscar_clima(ciudad: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${ciudad}&aqi=no&lang=es`;
    return this.http.get(url,this.httpOptions);
  }


}
