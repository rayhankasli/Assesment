import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertcurrencyComponent } from './convertcurrency/convertcurrency.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'convertcurrency',
    pathMatch: 'full'
  },
  {
    path: 'convertcurrency',
    component: ConvertcurrencyComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  }
];

/**
 * Ng module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
