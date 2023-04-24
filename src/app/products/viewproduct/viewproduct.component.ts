import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private ps: ProductService)
  {}

pid:any
pdata:any
  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{
      this.pid=data["id"];
      
    })
    this.ps.viewProduct(this.pid).subscribe((item:any)=>{
     // console.log(item);
     this.pdata=item
      
    })
    
  }

}
