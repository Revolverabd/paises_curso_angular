import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styleUrls: ['./for-capital.component.css']
})
export class ForCapitalComponent {


  termino: string = ''
  isError: boolean = false
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  search(termino: string) {

    this.isError = false
    this.termino = termino

    this.countryService.searchCapital(termino)
      .subscribe((countriesResponse) => {

        console.log(countriesResponse)
        this.countries = countriesResponse

      }, (error) => {
        this.isError = true
        this.countries = []
      })
  }


}
