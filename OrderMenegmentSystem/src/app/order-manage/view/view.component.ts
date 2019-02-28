/**
 * @author Rayhan Kasli
 * @description This component file are display the Order data. as well as perform crud opraton task
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderManageService } from '../order-manage.service';
import { Order } from '../order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  /**
   * Declear the variable
   */
  orderForm: FormGroup;
  orders: string[] = [];
  updateOrder: Order;
  showId: boolean;
  buttontxt = 'Make Order';
  /**
   * Creates an instance of view component.
   * @param orderService Inject the OrderManageService
   * @param formBuilder Inject the FormBuilder
   */
  constructor(private orderService: OrderManageService, private formBuilder: FormBuilder, private routes: Router) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.compose([Validators.required])],
      itemname: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      qty: ['', Validators.compose([Validators.required])],
      orderdate: ['', Validators.compose([Validators.required])],

    });
    this.getAllOrder();

  }

  /**
   * Gets all order data
   * @returns
   */
  getAllOrder() {
    return this.orderService.getOrders().subscribe((data: any[]) => {
      this.orders = data;
    });
  }

  /**
   * In this method eighter user can make order or update their existing order as per request
   */
  order() {
    const newOrder = this.orderForm.value;
    if (this.buttontxt === 'Make Order') {
      this.orderService.createOrder(newOrder).subscribe(() => {
        this.getAllOrder();
        this.orderForm.reset();
        this.routes.navigate(['/order/view']);

      });
    } else if (this.buttontxt === 'Update Order') {
      this.orderService.updateOrder(newOrder).subscribe(() => {
        this.getAllOrder();
        this.orderForm.reset();
        this.routes.navigate(['/order/view']);
      });
    }

  }
  /**
   * Updates order data
   * @param order set the all data into the form
   */
  updateOrderData(order) {
    this.buttontxt = 'Update Order';
    this.updateOrder = order;
    this.showId = true;
    this.orderForm.controls['id'].setValue(this.updateOrder.id);
    this.orderForm.controls['name'].setValue(this.updateOrder.name);
    this.orderForm.controls['itemname'].setValue(this.updateOrder.itemname);
    this.orderForm.controls['qty'].setValue(this.updateOrder.qty);
    this.orderForm.controls['price'].setValue(this.updateOrder.price);
    this.orderForm.controls['orderdate'].setValue(this.updateOrder.orderdate);

  }
  /**
   * Delete perticular order
   * @param orderId set the order id for delete
   */
  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      this.getAllOrder();
      this.routes.navigate(['/order/view']);
    });
  }



}
