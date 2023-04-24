import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe'


@NgModule({
  declarations: [
    ProductsComponent,
    ViewallproductComponent,
    ViewproductComponent,
    AddproductComponent,
    EditproductComponent,
    DeleteproductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
