import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IItem } from 'src/app/models/item.object';
import { IQuantity } from 'src/app/models/quantity.object';
import { IReview } from 'src/app/models/review.object';
import { CartService } from 'src/app/services/cart/cart.service';
import { MarkdownService } from 'src/app/services/markdown/markdown.service';
import { Web3Service } from 'src/app/services/web3/web3.service';
import { minimumQuantityValidator } from 'src/app/validators/quantity.validator';

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

  quantityFG!: FormGroup;

  optionsFG!: FormGroup;

  quantity: number = 0;

  sold: number = 0;

  erc20Symbol: string = '';

  constructor(
    private mdService: MarkdownService,
    public web3Service: Web3Service,
    private fb: FormBuilder,
    private router: Router,
    public cartService: CartService
  ){
  }

  ngOnInit(): void {
    this.item = {
      UID: 0,
      title: 'PC Hardware',
      description: 'string',
      about: 'string',
      seller: 'string',
      prices: [500],
      isErc20Price: true,
      erc20: '0x547B5362a0aA165cF98237C98cdA5A4003f5cA9F',
      admitBids: false,
      bid: 0,
      bids: [20],
      images: [
        'https://www.istockphoto.com/resources/images/HomePage/Tiles/SEB/Work-From-Home-874867586.jpg',
        'https://www.istockphoto.com/resources/images/HomePage/Tiles/SEB/Lifestyle-1129449588.jpg',
      ],
      quantity: [
        {
          options: {
            'Size': 'M',
            'Color': 'Orange',
          },
          quantity: 1
        },
        {
          options: {
            'Size': 'M',
            'Color': 'Blue',
          },
          quantity: 2
        },
        {
          options: {
            'Size': 'M',
            'Color': 'Black',
          },
          quantity: 3
        },
        {
          options: {
            'Size': 'XL',
            'Color': 'Orange',
          },
          quantity: 4
        },
        {
          options: {
            'Size': 'XL',
            'Color': 'Blue',
          },
          quantity: 5
        },
        {
          options: {
            'Size': 'XL',
            'Color': 'Black',
          },
          quantity: 6
        },
        {
          options: {
            'Size': '2XL',
            'Color': 'Orange',
          },
          quantity: 7
        },
        {
          options: {
            'Size': '2XL',
            'Color': 'Blue',
          },
          quantity: 8
        },
        {
          options: {
            'Size': '2XL',
            'Color': 'Black',
          },
          quantity: 9
        },
      ],
      sold: [
        {
          options: {
            'Size': 'M',
            'Color': 'Orange',
          },
          sold: 1
        },
        {
          options: {
            'Size': 'M',
            'Color': 'Blue',
          },
          sold: 2
        },
        {
          options: {
            'Size': 'M',
            'Color': 'Black',
          },
          sold: 3
        },
        {
          options: {
            'Size': 'XL',
            'Color': 'Orange',
          },
          sold: 4
        },
        {
          options: {
            'Size': 'XL',
            'Color': 'Blue',
          },
          sold: 5
        },
        {
          options: {
            'Size': 'XL',
            'Color': 'Black',
          },
          sold: 6
        },
        {
          options: {
            'Size': '2XL',
            'Color': 'Orange',
          },
          sold: 7
        },
        {
          options: {
            'Size': '2XL',
            'Color': 'Blue',
          },
          sold: 8
        },
        {
          options: {
            'Size': '2XL',
            'Color': 'Black',
          },
          sold: 9
        },
      ],
      watch: ['s'],
      condition: 1,
      localization: 1,
      shipping: [0],
      shippingTo: [],
      deliveryPrice: 30,
      admitsReturns: true,
      returns: new Date(),
      options: [
        {
          key: 'Size',
          value: ['M', 'XL', '2XL']
        },
        {
          key: 'Color',
          value: ['Orange', 'Blue', 'Black']
        }
      ]
    };
    if (this.item.isErc20Price) {
      this.web3Service.getERC20Symbol(this.item.erc20).then((value: string) => {
        this.erc20Symbol = value;
      }).catch((err: any) => {
        console.error(err);
      });
    }
    this.quantityFG = this.fb.group({
      quantity: ['', [Validators.required, minimumQuantityValidator(this.quantity)]]
    });
    if (typeof this.item.quantity === 'object') {
      if (this.item.options) {
        this.optionsFG = this.fb.group({});
        for (let i = 0; i < this.item?.options?.length; i++) {
          this.optionsFG.addControl(
            this.item.options[i].key, this.fb.control('', Validators.required),
          );
        }
        this.optionsFG.valueChanges.subscribe((value: any) => {
          this.findQuantity();
          this.findSold();
          this.quantityFG.get('quantity')?.clearValidators();
          this.quantityFG.get('quantity')?.setValidators(Validators.compose([Validators.required, minimumQuantityValidator(this.quantity)]));
          if (this.optionsFG.valid) {
            this.quantityFG.get('quantity')?.enable();
          } else {
            this.quantityFG.get('quantity')?.disable();
          }
        });
      }
      this.quantityFG.get('quantity')?.patchValue(1);
      this.quantityFG.get('quantity')?.disable();
    }
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
      await this.processReviews();
    })();
    this.onChanges();
  }

  onChanges(): void {
    this.quantityFG.get('quantity')?.valueChanges.subscribe(_ => {
      this.quantityFG.get('quantity')?.clearValidators();
      this.quantityFG.get('quantity')?.setValidators(Validators.compose([Validators.required, minimumQuantityValidator(this.quantity)]));
    });
  }

  addItemToCart(): void {
    if (this.item) {
      this.cartService.addItem(this.item);
    }
  }

  changeSelectedImage(index: number): void {
    this.selectedImage = this.item!.images[index];
  }

  toPercentage(count: number): number {
    return (count/this.reviews.length) * 100;
  }

  async processReviews(): Promise<void> {
    for (let i = 0; i < this.reviews.length; i++) {
      await this.mdService.processMDString(this.reviews[i].content).then((value: string) => {
        this.reviewsContent.push(value);
      }).catch((err: any) => {
        console.error(err);
      });
    }
  }

  /*
  quantity: [
    {
      options: {
        key1: 'M',
        key2: 'Orange',
      },
      quantity: 5
    },
    {
      options: {
        key1: 'M',
        key2: 'Blue',
      },
      quantity: 5
    },
    {
      options: {
        key1: 'L',
        key2: 'Black',
      },
      quantity: 5
    },
    {
      options: {
        key1: 'M',
        key2: 'Black',
      },
      quantity: 5
    },
  ],
  options: [
    {
      key: 'Size',
      value: ['M', 'XL', '2XL']
    },
  */

  findQuantity(): void {
    if (this.optionsFG.valid) {
      if (this.item?.options) {
        let keys: string[] = [];
        this.item?.options?.forEach(o => keys.push(o.key));
        (<any[]>this.item?.quantity).filter(q => {
          if (keys.length === 1) {
            if(
              q.options[keys[0]] === this.optionsFG.get(keys[0])?.value
            ) {
              this.quantity = q.quantity;
              console.log("1");
            }
          } else if (keys.length === 2) {
            if (
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value) {
              this.quantity = q.quantity;
              console.log("2",q);
            }
          } else if (keys.length === 3) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value;
            this.quantity = q.quantity;
            console.log("3",q);
          } else if (keys.length === 4) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value &&
            q.options[keys[3]] === this.optionsFG.get(keys[3])?.value;
            this.quantity = q.quantity;
          } else if (keys.length === 5) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value &&
            q.options[keys[3]] === this.optionsFG.get(keys[3])?.value &&
            q.options[keys[4]] === this.optionsFG.get(keys[4])?.value;
            this.quantity = q.quantity;
          } else if (keys.length === 6) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value &&
            q.options[keys[3]] === this.optionsFG.get(keys[3])?.value &&
            q.options[keys[4]] === this.optionsFG.get(keys[4])?.value &&
            q.options[keys[5]] === this.optionsFG.get(keys[5])?.value;
            this.quantity = q.quantity;
          }
          /*
          (<any>q.options).entries((k: string, v: string) => {
            //console.log(`%s,%s->%d`,k,v,q.quantity);
            /*
            */
           /*
          });
          */
        });
        /*
        (<any[]>this.item?.quantity).filter(q => keys.forEach(k => q.options[k] === this.optionsFG.get(k)?.value && console.log(q.options[k]))),      
        this.optionsFG.value
        );
        */
        //(<any[]>this.item?.quantity).filter(i => keys.forEach(k => i.options[k] === this.));
      }
    }
  }

  findSold(): void {
    if (this.optionsFG.valid) {
      if (this.item?.options) {
        let keys: string[] = [];
        this.item?.options?.forEach(o => keys.push(o.key));
        (<any[]>this.item?.sold).filter(q => {
          if (keys.length === 1) {
            if(
              q.options[keys[0]] === this.optionsFG.get(keys[0])?.value
            ) {
              this.sold = q.sold;
            }
          } else if (keys.length === 2) {
            if (
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value) {
              this.sold = q.sold;
            }
          } else if (keys.length === 3) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value;
            this.sold = q.sold;
            console.log("3",q);
          } else if (keys.length === 4) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value &&
            q.options[keys[3]] === this.optionsFG.get(keys[3])?.value;
            this.sold = q.sold;
          } else if (keys.length === 5) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value &&
            q.options[keys[3]] === this.optionsFG.get(keys[3])?.value &&
            q.options[keys[4]] === this.optionsFG.get(keys[4])?.value;
            this.sold = q.sold;
          } else if (keys.length === 6) {
            q.options[keys[0]] === this.optionsFG.get(keys[0])?.value &&
            q.options[keys[1]] === this.optionsFG.get(keys[1])?.value &&
            q.options[keys[2]] === this.optionsFG.get(keys[2])?.value &&
            q.options[keys[3]] === this.optionsFG.get(keys[3])?.value &&
            q.options[keys[4]] === this.optionsFG.get(keys[4])?.value &&
            q.options[keys[5]] === this.optionsFG.get(keys[5])?.value;
            this.sold = q.sold;
          }
          /*
          (<any>q.options).entries((k: string, v: string) => {
            //console.log(`%s,%s->%d`,k,v,q.quantity);
            /*
            */
           /*
          });
          */
        });
        /*
        (<any[]>this.item?.quantity).filter(q => keys.forEach(k => q.options[k] === this.optionsFG.get(k)?.value && console.log(q.options[k]))),      
        this.optionsFG.value
        );
        */
        //(<any[]>this.item?.quantity).filter(i => keys.forEach(k => i.options[k] === this.));
      }
    }
  }

  dateFormat(_date: string | Date): string {
    let date = new Date(_date);
    let month = '';
    if (date.getUTCMonth() === 1) {
      month = 'January';
    }
    else if (date.getUTCMonth() === 2) {
      month = 'February';
    }
    else if (date.getUTCMonth() === 3) {
      month = 'March';
    }
    else if (date.getUTCMonth() === 4) {
      month = 'April';
    }
    else if (date.getUTCMonth() === 5) {
      month = 'June';
    }
    else if (date.getUTCMonth() === 6) {
      month = 'July';
    }
    else if (date.getUTCMonth() === 7) {
      month = 'Augoust';
    }
    else if (date.getUTCMonth() === 8) {
      month = 'September';
    }
    else if (date.getUTCMonth() === 9) {
      month = 'October';
    }
    else if (date.getUTCMonth() === 10) {
      month = 'November';
    }
    else if (date.getUTCMonth() === 11) {
      month = 'December';
    }
    return month + ' ' + date.getDate() + ',' + date.getFullYear();
  }

  addressFormat(address: string): string {
    let start = address.substring(0,6);
    let end = address.substring(address.length-4);
    return start + '....' + end;
  }

  goToUser(): void {
    if (this.item) {
      this.router.navigate(['/user/' + this.item.seller]);
    }
  }

  getCountry(c: number | undefined): string {
    if (!c) {
      return '';
    }
    if(c === 0) {
      return 'WorldWide';
    } else if (c === 1) {
      return 'Afghanistan';
    } else if (c === 2) {
      return 'Albania';
    } else if (c === 3) {
      return 'Algeria';
    } else if (c === 4) {
      return 'Andorra';
    } else if (c === 5) {
      return 'Angola';
    } else if (c === 6) {
      return 'Antigua and Barbuda';
    } else if (c === 7) {
      return 'Argentina';
    } else if (c === 8) {
      return 'Armenia';
    } else if (c === 9) {
      return 'Australia';
    } else if (c === 10) {
      return 'Austria';
    } else if (c === 11) {
      return 'Azerbaijan';
    } else if (c === 12) {
      return 'Bahamas';
    } else if (c === 13) {
      return 'Bahrain';
    } else if (c === 14) {
      return 'Bangladesh';
    } else if (c === 15) {
      return 'Barbados';
    } else if (c === 16) {
      return 'Belarus';
    } else if (c === 17) {
      return 'Belgium';
    } else if (c === 18) {
      return 'Belize';
    } else if (c === 19) {
      return 'Benin';
    } else if (c === 20) {
      return 'Bhutan';
    } else if (c === 21) {
      return 'Bolivia';
    } else if (c === 22) {
      return 'Bosnia and Herzegovina';
    } else if (c === 23) {
      return 'Botswana';
    } else if (c === 24) {
      return 'Brazil';
    } else if (c === 25) {
      return 'Brunei';
    } else if (c === 26) {
      return 'Bulgaria';
    } else if (c === 27) {
      return 'Burkina Faso';
    } else if (c === 28) {
      return 'Burundi';
    } else if (c === 29) {
      return 'Côte d\'Ivoire';
    } else if (c === 30) {
      return 'Cabo Verde';
    } else if (c === 31) {
      return 'Cambodia';
    } else if (c === 32) {
      return 'Cameroon';
    } else if (c === 33) {
      return 'Canada';
    } else if (c === 34) {
      return 'Central African Republic';
    } else if (c === 35) {
      return 'Chad';
    } else if (c === 36) {
      return 'Chile';
    } else if (c === 37) {
      return 'China';
    } else if (c === 38) {
      return 'Colombia';
    } else if (c === 39) {
      return 'Comoros';
    } else if (c === 40) {
      return 'Congo (Congo-Brazzaville)';
    } else if (c === 41) {
      return 'Costa Rica';
    } else if (c === 42) {
      return 'Croatia';
    } else if (c === 43) {
      return 'Cuba';
    } else if (c === 44) {
      return 'Cyprus';
    } else if (c === 45) {
      return 'Czechia (Czech Republic)';
    } else if (c === 46) {
      return 'Democratic Republic of the Congo';
    } else if (c === 47) {
      return 'Denmark';
    } else if (c === 48) {
      return 'Djibouti';
    } else if (c === 49) {
      return 'Dominica';
    } else if (c === 50) {
      return 'Dominican Republic';
    } else if (c === 51) {
      return 'Ecuador';
    } else if (c === 52) {
      return 'Egypt';
    } else if (c === 53) {
      return 'El Salvador';
    } else if (c === 54) {
      return 'Equatorial Guinea';
    } else if (c === 55) {
      return 'Eritrea';
    } else if (c === 56) {
      return 'Estonia';
    } else if (c === 57) {
      return 'Eswatini (fmr. "Swaziland")';
    } else if (c === 58) {
      return 'Ethiopia';
    } else if (c === 59) {
      return 'Fiji';
    } else if (c === 60) {
      return 'Finland';
    } else if (c === 61) {
      return 'France';
    } else if (c === 62) {
      return 'Gabon';
    } else if (c === 63) {
      return 'Gambia';
    } else if (c === 64) {
      return 'Georgia';
    } else if (c === 65) {
      return 'Germany';
    } else if (c === 66) {
      return 'Ghana';
    } else if (c === 67) {
      return 'Greece';
    } else if (c === 68) {
      return 'Grenada';
    } else if (c === 69) {
      return 'Guatemala';
    } else if (c === 70) {
      return 'Guinea';
    } else if (c === 71) {
      return 'Guinea-Bissau';
    } else if (c === 72) {
      return 'Guyana';
    } else if (c === 73) {
      return 'Haiti';
    } else if (c === 74) {
      return 'Holy See';
    } else if (c === 75) {
      return 'Honduras';
    } else if (c === 76) {
      return 'Hungary';
    } else if (c === 77) {
      return 'Iceland';
    } else if (c === 78) {
      return 'India';
    } else if (c === 79) {
      return 'Indonesia';
    } else if (c === 80) {
      return 'Iran';
    } else if (c === 81) {
      return 'Iraq';
    } else if (c === 82) {
      return 'Ireland';
    } else if (c === 83) {
      return 'Israel';
    } else if (c === 84) {
      return 'Italy';
    } else if (c === 85) {
      return 'Jamaica';
    } else if (c === 86) {
      return 'Japan';
    } else if (c ===87) {
      return 'Jordan';
    } else if (c === 88) {
      return 'Kazakhstan';
    } else if (c === 89) {
      return 'Kenya';
    } else if (c === 90) {
      return 'Kiribati';
    } else if (c === 91) {
      return 'Kuwait';
    } else if (c === 92) {
      return 'Kyrgyzstan';
    } else if (c === 93) {
      return 'Laos';
    } else if (c === 94) {
      return 'Latvia';
    } else if (c === 95) {
      return 'Lebanon';
    } else if (c === 96) {
      return 'Lesotho';
    } else if (c === 97) {
      return 'Liberia';
    } else if (c === 98) {
      return 'Libya';
    } else if (c === 99) {
      return 'Liechtenstein';
    } else if (c === 100) {
      return 'Lithuania';
    } else if (c === 101) {
      return 'Luxembourg';
    } else if (c === 102) {
      return 'Madagascar';
    } else if (c === 103) {
      return 'Malawi';
    } else if (c === 104) {
      return 'Malaysia';
    } else if (c === 105) {
      return 'Maldives';
    } else if (c === 106) {
      return 'Mali';
    } else if (c === 107) {
      return 'Malta';
    } else if (c === 108) {
      return 'Marshall Islands';
    } else if (c === 109) {
      return 'Mauritania';
    } else if (c === 110) {
      return 'Mauritius';
    } else if (c === 111) {
      return 'Mexico';
    } else if (c === 112) {
      return 'Micronesia';
    } else if (c === 113) {
      return 'Moldova';
    } else if (c === 114) {
      return 'Monaco';
    } else if (c === 115) {
      return 'Mongolia';
    } else if (c === 116) {
      return 'Montenegro';
    } else if (c === 117) {
      return 'Morocco';
    } else if (c === 118) {
      return 'Mozambique';
    } else if (c === 119) {
      return 'Myanmar (formerly Burma)';
    } else if (c === 120) {
      return 'Namibia';
    } else if (c === 121) {
      return 'Nauru';
    } else if (c === 122) {
      return 'Nepal';
    } else if (c === 123) {
      return 'Netherlands';
    } else if (c === 124) {
      return 'New Zealand';
    } else if (c === 125) {
      return 'Nicaragua';
    } else if (c === 126) {
      return 'Niger';
    } else if (c === 127) {
      return 'Nigeria';
    } else if (c === 128) {
      return 'North Korea';
    } else if (c === 129) {
      return 'North Macedonia';
    } else if (c === 130) {
      return 'Norway';
    } else if (c === 131) {
      return 'Oman';
    } else if (c === 132) {
      return 'Pakistan';
    } else if (c === 133) {
      return 'Palau';
    } else if (c === 134) {
      return 'Palestine State';
    } else if (c === 135) {
      return 'Panama';
    } else if (c === 136) {
      return 'Papua New Guinea';
    } else if (c === 137) {
      return 'Paraguay';
    } else if (c === 138) {
      return 'Peru';
    } else if (c === 139) {
      return 'Philippines';
    } else if (c === 140) {
      return 'Poland';
    } else if (c === 141) {
      return 'Portugal';
    } else if (c === 142) {
      return 'Qatar';
    } else if (c === 143) {
      return 'Romania';
    } else if (c === 144) {
      return 'Russia';
    } else if (c === 145) {
      return 'Rwanda';
    } else if (c === 146) {
      return 'Saint Kitts and Nevis';
    } else if (c === 147) {
      return 'Saint Lucia';
    } else if (c === 148) {
      return 'Saint Vincent and the Grenadines';
    } else if (c === 149) {
      return 'Samoa';
    } else if (c === 150) {
      return 'San Marino';
    } else if (c === 151) {
      return 'Sao Tome and Principe';
    } else if (c === 152) {
      return 'Saudi Arabia';
    } else if (c === 153) {
      return 'Senegal';
    } else if (c === 154) {
      return 'Serbia';
    } else if (c === 155) {
      return 'Seychelles';
    } else if (c === 156) {
      return 'Sierra Leone';
    } else if (c === 157) {
      return 'Singapore';
    } else if (c === 158) {
      return 'Slovakia';
    } else if (c === 159) {
      return 'Slovenia';
    } else if (c === 160) {
      return 'Solomon Islands';
    } else if (c === 161) {
      return 'Somalia';
    } else if (c === 162) {
      return 'South Africa';
    } else if (c === 163) {
      return 'South Korea';
    } else if (c === 164) {
      return 'South Sudan';
    } else if (c === 165) {
      return 'Spain';
    } else if (c === 166) {
      return 'Sri Lanka';
    } else if (c === 167) {
      return 'Sudan';
    } else if (c === 168) {
      return 'Suriname';
    } else if (c === 169) {
      return 'Sweden';
    } else if (c === 170) {
      return 'Switzerland';
    } else if (c === 171) {
      return 'Syria';
    } else if (c === 172) {
      return 'Tajikistan';
    } else if (c === 173) {
      return 'Tanzania';
    } else if (c === 174) {
      return 'Thailand';
    } else if (c === 175) {
      return 'Timor-Leste';
    } else if (c === 176) {
      return 'Togo';
    } else if (c === 177) {
      return 'Tonga';
    } else if (c === 178) {
      return 'Trinidad and Tobago';
    } else if (c === 179) {
      return 'Tunisia';
    } else if (c === 180) {
      return 'Turkey';
    } else if (c === 181) {
      return 'Turkmenistan';
    } else if (c === 182) {
      return 'Tuvalu';
    } else if (c === 183) {
      return 'Uganda';
    } else if (c === 184) {
      return 'Ukraine';
    } else if (c === 185) {
      return 'United Arab Emirates';
    } else if (c === 186) {
      return 'United Kingdom';
    } else if (c === 187) {
      return 'United States of America';
    } else if (c === 188) {
      return 'Uruguay';
    } else if (c === 189) {
      return 'Uzbekistan';
    } else if (c === 190) {
      return 'Vanuatu';
    } else if (c === 191) {
      return 'Venezuela';
    } else if (c === 192) {
      return 'Vietnam';
    } else if (c === 193) {
      return 'Yemen';
    } else if (c === 194) {
      return 'Zambia';
    } else if (c === 195) {
      return 'Zimbabwe';
    } else {
      return '';
    }
  }

}
