/**
 *  Bank is Model class which contain some properties
 *  @author Rayhan Kasli
 *  @description Model class 
 */
export class Bank {
    /** id contain unique id of bank */
    public id: number;
    /** bankName contain name of bank */
    public bankName: string;
    /** baseCurrency conatain basecurrency */
    public baseCurrency: string;
    /** amount contain amount for convert with api value  */
    public amount: number;
    /** targetCurrency contain targetCurrency */
    public targetCurrency: string;
    /** total contain the total ammount with api data */
    public total: number;
    /** currencyRate is the rate which is get from api */
    public currencyRate: number;
}
