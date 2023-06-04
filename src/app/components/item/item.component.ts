import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.object';
import { IReview } from 'src/app/models/review.object';
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

  reviews: IReview[] = [];

  reviewsContent: string[] = [];

  oneStarsReviews: number = 0;
  twoStarsReviews: number = 0;
  threeStarsReviews: number = 0;
  fourStarsReviews: number = 3;
  fiveStarsReviews: number = 0;

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
    this.reviews.push(
      {
        seller: '0x00000000000000',
        title: 'THE feedback',
        content: 'The BLA BLA BLA',
        date: new Date(),
        stars: 4
      }
    );
    this.reviews.push(
      {
        seller: '0x00000000000000',
        title: 'The BLA BLA BLA',
        content: 'The BLA BLA BLA', 
        date: new Date(),
        stars: 4
      }
    );
    this.reviews.push(
      {
        title: 'The BLA BLA BLA',
        seller: '0x00000000000000',
        content: 'The BLA BLA BLA', 
        date: new Date(),
        stars: 4
      }
    );
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
    return (count/this.reviews.length) * 100;
  }

}
