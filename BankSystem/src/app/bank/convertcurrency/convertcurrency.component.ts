/**
 *  @author Rayhan Kasli
 *  @description This component file is used to add new bank details
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ManageBankService } from '../manage-bank.service';
import { Router } from '@angular/router';
import { Bank } from '../bank.model';

/**
 * Component
 */
@Component({
  selector: 'app-convertcurrency',
  templateUrl: './convertcurrency.component.html',
  styleUrls: ['./convertcurrency.component.scss']
})
export class ConvertcurrencyComponent implements OnInit {

  /** bankForm group contain form data */
  public bankForm: FormGroup;
  /** countryCode array contain multiple country codes */
  public countryCode: string[] = ['INR', 'AUD', 'CZK', 'DKK', 'EUR',
                                  'JPY', 'MXN', 'NZD', 'TRY' , 'USD'];
  /**
   * Creates an instance of convertcurrency component.
   * @param formBuilder inject FormBuilder class
   * @param manageBankService inject ManageBankService service
   * @param routes inject Router for routing
   */
  constructor(private formBuilder: FormBuilder, private manageBankService: ManageBankService, private routes: Router) {
  }

  public ngOnInit(): void {
    this.bankForm = this.formBuilder.group({
      id: [''],
      bankName: ['', Validators.compose([Validators.required])],
      baseCurrency: ['', Validators.required],
      ammount: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      targetCurrency: ['', Validators.required]
    });
  }

  /** Gets bank validation */
  // tslint:disable-next-line:typedef
  public get bankValidation() {
    return this.bankForm.controls;
  }

  /**
   * addBankData used to add new bank details
   */
  public addBankData(): void {
    const bankFormData: Bank = this.bankForm.value;
    this.manageBankService.createNewData(bankFormData).subscribe();
    this.bankForm.reset();
  }
}
