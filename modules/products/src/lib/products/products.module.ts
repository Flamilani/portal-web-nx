import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { UiComponent } from '@estudo-nx/modules/shared/ui';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    UiComponent
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
