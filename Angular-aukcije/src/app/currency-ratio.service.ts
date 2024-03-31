import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class currencyRatioService {
  private apiUrl = 'https://api.freecurrencyapi.com/v1/latest';
  private apiKey = 'fca_live_3Aux39wrTiQukOCQ9m2IpJSeQ3c1PLAmJNY3U5US';

  constructor(private http: HttpClient) { }

  getCurrencyRatio(currencies: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&currencies=${currencies}`;
    return this.http.get<any>(url);
  }
}
