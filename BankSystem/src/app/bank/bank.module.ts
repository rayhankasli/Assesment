import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { ConvertcurrencyComponent } from './convertcurrency/convertcurrency.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './summary/header/header.component';
import { CardsComponent } from './summary/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageBankService } from './manage-bank.service';

/**
 * Ng module
 */
@NgModule({
  declarations: [ConvertcurrencyComponent, SummaryComponent, HeaderComponent, CardsComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ManageBankService]
})
export class BankModule { }
