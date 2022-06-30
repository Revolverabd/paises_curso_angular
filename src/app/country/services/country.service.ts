import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // private apiUrl = 'https://restcountries.com/v3.1'
  private apiUrl = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population')
  }

  searchCountry(countryName: string) {
    const url = `${this.apiUrl}/name/${countryName}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  searchCapital(capitalName: string) {
    const url = `${this.apiUrl}/capital/${capitalName}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  getCountryForAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url)
  }

  getCountriesOfRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

}
