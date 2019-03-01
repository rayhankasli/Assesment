import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderManageRoutingModule } from './order-manage-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { OrderManageService } from './order-manage.service';
import { TotalPricePipe } from './total-price.pipe';



@NgModule({
  imports: [
    CommonModule,
    OrderManageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComponent, ViewComponent, TotalPricePipe],
  providers: [OrderManageService]
})
export class OrderManageModule { }
