import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  slidesStore:any[]=[
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},
    {id:1,alt:'img',title:'sasa',src:'assets/images/products/product-4-thumb.jpg'},

  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
