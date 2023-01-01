import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.object';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: IItem[] = [];

  constructor(){}

  ngOnInit(): void {
    this.items.push({
      uid: 0,
      title: 'Desktop PC',
      description: 'Desktop pc lambed',
      seller: '',
      prices: [200],
      bid: 0,
      bids: [],
      erc20: '',
      images: [],
      quantity: 10,
      watch: [],
      sold: 0,
      condition: 0,
      shipping: [0],
      delivery: 30,
      returns: 0,
    });
    this.items.push({
      uid: 0,
      title: 'Desktop PC',
      description: 'Desktop pc lambed',
      seller: '',
      prices: [200],
      bid: 0,
      bids: [],
      erc20: '',
      images: [],
      quantity: 10,
      watch: [],
      sold: 0,
      condition: 0,
      shipping: [0],
      delivery: 30,
      returns: 0,
    });
    this.items.push({
      uid: 0,
      title: 'Desktop PC',
      description: 'Desktop pc lambed',
      seller: '',
      prices: [200],
      bid: 0,
      bids: [],
      erc20: '',
      images: [],
      quantity: 10,
      watch: [],
      sold: 0,
      condition: 0,
      shipping: [0],
      delivery: 30,
      returns: 0,
    });
  }

}
