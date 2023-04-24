import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

const routes: Routes = [
  { path: '', component:ViewallproductComponent },
  { path: 'view-product/:id', component:ViewproductComponent },
  { path: 'edit-product/:id', component:EditproductComponent },
  { path: 'add-product', component:AddproductComponent },
  { path: 'delete-product/:id', component:DeleteproductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
