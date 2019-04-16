/**
 *  @author Rayhan Kasli
 *  @description this component file is used to get and convert the data from api
 */
import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank.model';
import { ManageBankService } from '../manage-bank.service';

/**
 * Component
 */
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  /** bankData contain get all bank data */
  public bankData: Bank[] = [];
  /** convertAmountValue conatain the converted value from api */
  public convertAmountValue: number;
  /** totalAmount contain total amount which menupulate with api data */
  public totalAmount: number;
  /**
   * Creates an instance of summary component.
   * @param manageBankService inject ManageBankService
   */
  constructor(private manageBankService: ManageBankService) { }

  public ngOnInit(): void {
    this.getBankData();
  }

  /**
   * Gets all bankdata
   */
  public getBankData(): void {
    this.manageBankService.getBankData().subscribe((response: Bank[]) => {
      this.bankData = response;
      this.convertAmmountData(this.bankData);
    });
  }

  /** Converts ammount data from api */
  public convertAmmountData(bankData: Bank[]): void {
    bankData.forEach((element: Bank) => {
      this.manageBankService.getApiData(element.baseCurrency, element.targetCurrency).subscribe((convertValue: number) => {
          this.convertAmountValue = convertValue[element.targetCurrency + '_' + element.baseCurrency];
          this.totalAmount = element.amount * this.convertAmountValue;
          element.currencyRate = this.convertAmountValue;
          element.total = this.totalAmount;
        });

    });
  
    
  }

}
