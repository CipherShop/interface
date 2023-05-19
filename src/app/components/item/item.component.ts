import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.object';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: IItem | undefined;

  selectedImage: string = '';

  constructor(){}

  ngOnInit(): void {
    this.item = {
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
    };
    this.selectedImage = this.item.images[0];
  }

  changeSelectedImage(index: number): void {
    this.selectedImage = this.item!.images[index];
  }

}
