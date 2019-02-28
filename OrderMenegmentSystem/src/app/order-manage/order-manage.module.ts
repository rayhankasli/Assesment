import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderManageRoutingModule } from './order-manage-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { OrderManageService } from './order-manage.service';



@NgModule({
  imports: [
    CommonModule,
    OrderManageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComponent, ViewComponent],
  providers: [OrderManageService]
})
export class OrderManageModule { }
