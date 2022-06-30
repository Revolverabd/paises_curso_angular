import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  country!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  //obtenemos los params del url
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryForAlpha(id)),tap(console.log)
      )
      .subscribe(country => {
        this.country = country
      })
  }


}
