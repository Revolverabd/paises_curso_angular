import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styleUrls: ['./for-region.component.css']
})
export class ForRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActive: string = ''
  countries: Country[] = []


  constructor(private countryService: CountryService) { }

  getClassCSS(region: string): string {
    return (region === this.regionActive) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activeRegion(region: string) {

    if(region === this.regionActive) return

    this.regionActive = region
    this.countries = []

    this.countryService.getCountriesOfRegion(region)
      .subscribe(country => this.countries = country)
  }



}
