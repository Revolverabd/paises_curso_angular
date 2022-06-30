import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.css']
})
export class ForCountryComponent {

  termino: string = ''
  isError: boolean = false
  suggestionOptions: boolean = false
  countries: Country[] = []
  countriesSuggestions: Country[] = []

  constructor(private countryService: CountryService) { }

  search(termino: string) {

    this.suggestionOptions = false
    this.isError = false
    this.termino = termino

    this.countryService.searchCountry(termino)
      .subscribe((countriesResponse) => {
        this.countries = countriesResponse
      }, (error) => {
        this.isError = true
        this.countries = []
      })
  }

  suggestion(termino: string) {
    this.suggestionOptions = true
    this.isError = false
    this.termino = termino

    this.countryService.searchCountry(termino)
      .subscribe(countries => this.countriesSuggestions = countries.splice(0, 3),
        (error) => this.countriesSuggestions = []
      )
  }

  searchSuggestions(termino: string) {
    this.search(termino)
  }
}
