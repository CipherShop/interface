import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/models/item.object';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: IItem[] = [];

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.items.push({
      UID: 0,
      title: 'PC Hardware',
      description: 'string',
      seller: 'string',
      prices: [500],
      isErc20Price: false,
      erc20: 'string',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: [],
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
    this.items.push({
      UID: 0,
      title: 'PC Hardware',
      description: 'string',
      seller: 'string',
      prices: [500],
      isErc20Price: false,
      erc20: 'string',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: [],
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
    this.items.push({
      UID: 0,
      title: 'PC Hardware',
      description: 'string',
      seller: 'string',
      prices: [500],
      isErc20Price: false,
      erc20: 'string',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: [],
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
  }

  selectItem(UID: number): void {
    this.router.navigate(['/item/' + UID]);
  }

}
