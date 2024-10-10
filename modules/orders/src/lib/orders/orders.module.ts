import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ModalOrdersComponent } from '../modal-orders/modal-orders.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OrdersComponent, ModalOrdersComponent],
  imports: [CommonModule, OrdersRoutingModule, MatTableModule],
  exports: [OrdersComponent],
})
export class OrdersModule {}
