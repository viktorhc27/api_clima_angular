import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private apiUrl = 'https://nominatim.openstreetmap.org/search';

  constructor(
    private http: HttpClient
  ) { }
  buscar_clima(ciudad: string): Observable<any> {
    return this.http.get("http://api.weatherapi.com/v1/current.json?key=ef3dbfaf5994498d9ac230453232512&q="+ciudad+"&aqi=no&lang=es")
    //return this.http.get("http://api.weatherapi.com/v1/current.json?key=ef3dbfaf5994498d9ac230453232512&q=arica&aqi=no")
    
  }

  getLocation() {
    return this.http.get('http://api.ipapi.com/api/check?access_key=AIzaSyCenp6Eupizf2ow5uX1NgMkZhMz-LtwOQQ')
  }
  getCities(query: string): Observable<any> {
    const params = {
      format: 'json',
      limit: '5',
      q: query
    };

    return this.http.get(this.apiUrl, { params });
  }
}
