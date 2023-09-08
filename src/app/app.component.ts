import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IItem } from './models/item.object';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: ElementRef;

  categories: string[] = [
    'All categories',
    'Motors',
    'Clothing, Shoes & Accesories',
    'Sporting Goods',
    'Toys & Hobbies',
    'Home & Garden',
    'Jewelry & Watches',
    'Health & Beauty',
    'Business & Industrial',
    'Pet Supplies',
    'Baby Essentials',
    'Electronics',
    'Collectibles & Art',
    'Books, Movies & Music'
  ];

  categoryForm!: FormGroup;
  searchForm!: FormGroup;

  cart: IItem[] = [];

  hiddenCartBadge: boolean = false;

  removeCartItem: boolean[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      category: ['']
    });
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.cart.push({
      UID: 0,
      title: 'PC Hardware 1',
      description: 'string',
      about: '',
      seller: 'string',
      prices: [500],
      isErc20Price: false,
      erc20: 'string',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: ['https://i.seadn.io/gae/cdGlRPgt8ckJi13jb19n2_iwhC0c_Df5GG0um-6pjUIMFOsaHLSfBLBNaqDmL1po7CYGmxuIwM_7RCkozlrIYSEi6dOC2arH4llc?w=500&auto=format'],
      quantity: 2,
      sold: 5,
      watch: ['s'],
      condition: 1,
      localization: 1,
      shipping: [0],
      shippingTo: [],
      deliveryPrice: 30,
      admitsReturns: true,
      returns: new Date()
    });
    this.cart.push({
      UID: 0,
      title: 'PC Hardware 2',
      description: 'string',
      about: '',
      seller: 'string',
      prices: [500],
      isErc20Price: false,
      erc20: 'string',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: ['https://i.seadn.io/gae/cdGlRPgt8ckJi13jb19n2_iwhC0c_Df5GG0um-6pjUIMFOsaHLSfBLBNaqDmL1po7CYGmxuIwM_7RCkozlrIYSEi6dOC2arH4llc?w=500&auto=format'],
      quantity: 2,
      sold: 5,
      watch: ['s'],
      condition: 1,
      localization: 1,
      shipping: [0],
      shippingTo: [],
      deliveryPrice: 30,
      admitsReturns: true,
      returns: new Date()
    });
    this.cart.push({
      UID: 0,
      title: 'PC Hardware 3',
      description: 'string',
      about: '',
      seller: 'string',
      prices: [500],
      isErc20Price: false,
      erc20: 'string',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: ['https://i.seadn.io/gae/cdGlRPgt8ckJi13jb19n2_iwhC0c_Df5GG0um-6pjUIMFOsaHLSfBLBNaqDmL1po7CYGmxuIwM_7RCkozlrIYSEi6dOC2arH4llc?w=500&auto=format'],
      quantity: 2,
      sold: 5,
      watch: ['s'],
      condition: 1,
      localization: 1,
      shipping: [0],
      shippingTo: [],
      deliveryPrice: 30,
      admitsReturns: true,
      returns: new Date()
    });
    for (let i = 0; i < this.cart.length; i++) {
      this.removeCartItem.push(false);
    }
    this.cartService.itemEmitter.subscribe((item: IItem) => {
      this.cart.push(item);
      this.removeCartItem.push(false);
      this.hiddenCartBadge = false;
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  selectCategory(event: any): void {
    let code = -1;
    if (event.value === 'All categories') {
      code = 0;
    } else if (event.value === 'Motors') {
      code = 1;
    } else if (event.value === 'Clothing, Shoes & Accesories') {
      code = 2;
    } else if (event.value === 'Sporting Goods') {
      code = 3;
    } else if (event.value === 'Toys & Hobbies') {
      code = 4;
    } else if (event.value === 'Home & Garden') {
      code = 5;
    } else if (event.value === 'Jewelry & Watches') {
      code = 6;
    } else if (event.value === 'Health & Beauty') {
      code = 7;
    } else if (event.value === 'Business & Industrial') {
      code = 8;
    } else if (event.value === 'Pet Supplies') {
      code = 9;
    } else if (event.value === 'Baby Essentials') {
      code = 10;
    } else if (event.value === 'Electronics') {
      code = 11;
    } else if (event.value === 'Collectibles & Art') {
      code = 12;
    } else if (event.value === 'Books, Movies & Music') {
      code = 13;
    }
    if (code > -1) {
      this.router.navigate(['/c/' + code]);
    }
  }

  openNav(): void {
    this.sidenav.nativeElement.style.width = '250px';
  }
  
  closeNav(): void {
    this.sidenav.nativeElement.style.width = '0';
  }

  deleteCartItem(index: number): void {
    this.cart.splice(index, 1);
    this.removeCartItem.slice(index, 1);
    if(this.cart.length === 0) {
      this.hiddenCartBadge = true;
    } else {
      this.hiddenCartBadge = false;
    }
  }

}
