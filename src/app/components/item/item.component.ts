import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.object';
import { MarkdownService } from 'src/app/services/markdown/markdown.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: IItem | undefined;

  about: string = '';

  selectedImage: string = '';

  medianReview: number = 4.6;

  reviews: any[] = [];

  oneStarsReviews: any[] = [];
  twoStarsReviews: any[] = [];
  threeStarsReviews: any[] = [];
  fourStarsReviews: any[] = [];
  fiveStarsReviews: any[] = [];

  constructor(
    private mdService: MarkdownService
  ){}

  ngOnInit(): void {
    this.item = {
      UID: 0,
      title: 'PC Hardware',
      description: 'string',
      about: 'string',
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
      returns: new Date(),
    };
    this.selectedImage = this.item.images[0];
    (async()=> {
      await this.mdService.processMDString(this.item!.description).then((value: string) => {
        return new Promise((resolve, reject) => {
          this.about = value;
          resolve(null);
        });
      }).catch((err: any) => {
        console.error(err);
      });
    })();
  }

  changeSelectedImage(index: number): void {
    this.selectedImage = this.item!.images[index];
  }

  toPercentage(count: number): number {
    return Math.abs(count - this.reviews.length)/this.reviews.length;
  }

}
