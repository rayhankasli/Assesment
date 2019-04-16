/**
 *  @author Rayhan Kasli
 *  @description Service file is use to communication between component and server 
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bank } from './bank.model';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class ManageBankService {

  /**
   * Service url of manage bank service
   */
  public serviceUrl: string = 'http://localhost:3000/currencyconverter';
  /**
   * currencyConverterUrlStartPoint 
   */
  public currencyConverterUrlStartPoint: string = 'https://free.currencyconverterapi.com/api/v6/convert?q=';
  /**
   * currencyConverterEndPoint
   */
  public currencyConverterEndPoint: string = '&compact=ultra&apiKey=5c2b89d69e5cffa4bd34';

  /**
   * Creates an instance of manage bank service.
   * @param httpClient inject HttpClient class 
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * getBankData is use to get all the bank details
   * @returns bank observable
   */
  public getBankData(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>(this.serviceUrl);
  }

  /**
   * getApiData used for convert value with basecurrency to targetcurrency
   * @param basecurrency contain basecurrency like INR
   * @param targetcurrency contain targetcurrency like USD
   * @returns api data like current rate i.e.  usd = 69
   */
  public getApiData(basecurrency: string, targetcurrency: string): Observable<number> {
    return this.httpClient.get<number>(this.currencyConverterUrlStartPoint + targetcurrency +
       '_' + basecurrency + this.currencyConverterEndPoint);
  }

  /**
   * createNewData used for create new bank card
   * @param newBankdata contain data for add new bank details
   * @returns bank observable 
   */
  public createNewData(newBankdata: Bank): Observable<Bank> {
    return this.httpClient.post<Bank>(this.serviceUrl, newBankdata);
  }

}
