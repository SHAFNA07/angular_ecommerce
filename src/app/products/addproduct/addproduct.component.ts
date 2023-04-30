import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router) {}

  addProductForm=this.fb.group({
      id:[''],
      productName: [''],
      categoryId:[''],
      description:[''],
      price:[''],
      is_available: [''],
      productImg: [''],
      rating: [''],
      review: [''],
      vendor_Name: [''],
      warranty: ['']

  })

  ngOnInit(): void {
    
  }

  addproduct()
  {
      let pdata={

        id:this.addProductForm.value.id,
        productName: this.addProductForm.value.productName,
        categoryId:this.addProductForm.value.categoryId,
        description:this.addProductForm.value.description,
        price:this.addProductForm.value.price,
        is_available:this.addProductForm.value.is_available,
        productImg: this.addProductForm.value.productImg,
        rating: this.addProductForm.value.rating,
        review: this.addProductForm.value.review,
        vendor_Name: this.addProductForm.value.vendor_Name,
        warranty:this.addProductForm.value.warranty
      }

      this.ps.addNewProduct(pdata).subscribe((item:any)=>{
        alert("new product added")
        this.router.navigateByUrl("products")

      })
  }

}
