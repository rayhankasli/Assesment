/**
 * @author Rayhan Kasli
 * @description This service file is use communication between component to server
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';

@Injectable()
export class OrderManageService {

  serviceUrl = 'http://localhost:3100/';
  constructor(private httpClient: HttpClient) { }

  /**
   * Gets all the orders from server usig get method of http client
   * @returns all the orders data observable
   */
  public getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.serviceUrl + 'orderdetails');
  }
  /**
   * Create a new order using post method of http client
   */
  public createOrder(order: Order):
    Observable<Order> {
    return this.httpClient.post<Order>(`${this.serviceUrl + 'orderdetails'}`, order);
  }

  /**
   * Updates exsiting order
   * @param oreder it set the id for update order
   */
  public updateOrder(oreder: { id: number, name: string, itemname: string, price: number, qty: number, dob: Date }):
    Observable<Order> {
    return this.httpClient.put<Order>(`${this.serviceUrl + 'orderdetails'}/${oreder.id}`, oreder);
  }


  /**
   * Deletes a perticular order using the order id
   * @param orderId it set the id for delete order
   */
  public deleteOrder(orderId: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.serviceUrl + 'orderdetails'}/${orderId}`);
  }


}
