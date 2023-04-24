import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewallproduct',
  templateUrl: './viewallproduct.component.html',
  styleUrls: ['./viewallproduct.component.css']
})
export class ViewallproductComponent implements OnInit {
  productData:any
  filterCategory:any
  searchString:any=''

  constructor(private ps:ProductService) { }

  ngOnInit():void {
    this.ps.viewAllProduct().subscribe((data:any)=>{
    //  console.log(data);
    this.productData=data      
    })

    //access data from behavior subject

    this.ps.search.subscribe((data:any)=>{
      this.searchString=data
    })
   }

   filter(category:any)
   {
   this.filterCategory=this.productData.filter((i:any)=>i.categoryId==category || category=="")
      
        
   }
    }
   
  
