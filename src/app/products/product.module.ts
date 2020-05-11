import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule, ProductRoutedModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ...ProductRoutedModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
