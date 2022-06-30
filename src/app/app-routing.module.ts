import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ForCountryComponent } from './country/pages/for-country/for-country.component';
import { ForRegionComponent } from './country/pages/for-region/for-region.component';
import { ForCapitalComponent } from './country/pages/for-capital/for-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [
  {
    path: '',
    component: ForCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ForRegionComponent,
  }
  ,
  {
    path: 'capital',
    component: ForCapitalComponent,
  },
  {
    path: 'pais/:id',
    component: ShowCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }