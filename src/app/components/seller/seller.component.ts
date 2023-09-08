import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/models/item.object';
import { ISeller } from 'src/app/models/seller.object';
import { MarkdownService } from 'src/app/services/markdown/markdown.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller!: ISeller;

  items: IItem[] = [];

  aboutContent: string = '';

  constructor(
    private router: Router,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.seller = {
      profilePic: '',
      items: [],
      sold: 0,
      about: 'Will be selling shoes and clothes most of the time',
      feedbacks: [
        {
          user: '0x000aZZZZZZZZZZZZZZZZZb000',
          item: 1,
          content: 'This mf has brought the esence of selling in a single package',
          date: new Date(),
          valoration: 1
        },
        {
          user: '0x000aZZZZZZZZZZZZZZZZZb000',
          item: 1,
          content: 'This mf has brought the esence of selling in a single package',
          date: new Date(),
          valoration: 1
        },
      ],
      username: 'User',
      registerDate: new Date(),
      location: 1
    };
    this.markdownService.processMDString(this.seller.about).then(
        (data: string) => {
          this.aboutContent = data;
        }
      ).catch(
        (err: any) => {console.error(err)}
    );
  }

  getPositiveFeedback(): number {
    let count = 0;
    for (let i = 0; i < this.seller.feedbacks.length; i++) {
      if (this.seller.feedbacks[i].valoration === 1) {
        count++;
      }
    }
    return count;
  }
  
  getNeutralFeedback(): number {
    let count = 0;
    for (let i = 0; i < this.seller.feedbacks.length; i++) {
      if (this.seller.feedbacks[i].valoration === 0) {
        count++;
      }
    }
    return count;
  }
  
  getNegativeFeedback(): number {
    let count = 0;
    for (let i = 0; i < this.seller.feedbacks.length; i++) {
      if (this.seller.feedbacks[i].valoration === -1) {
        count++;
      }
    }
    return count;
  }

  getFeedbackPercentage(): string {
    let result = '%';
    if (this.seller.feedbacks.length === 0) {
      result = 0 + result;
    } else {
      let count = 0;
      let positive = 0;
      for (let i = 0; i < this.seller.feedbacks.length; i++) {
        if (this.seller.feedbacks[i].valoration === 1) {
          positive++;
        }
        count++;
      }
      let valoration = (positive / count) * 100;
      result = valoration + result;  
    }
    return result;
  }

  getFeedbackQuantity(): number {
    let result = 0;
    for (let i = 0; i < this.seller.feedbacks.length; i++) {
      if (this.seller.feedbacks[i].valoration === 1) {
        result++;
      }
    }
    return result;
  }

  saveSeller(): void {
    //TODO
  }

  chatSeller(): void {
    //TODO
  }

  dateFormat(d: Date | string): string {
    let date = new Date(d);
    let now = new Date();
    let months;
    months = (now.getFullYear() - date.getFullYear()) * 12;
    months -= date.getMonth();
    months += now.getMonth();
    if (months >= 6) {
      return 'Past 6 months';
    } else if (months === 5) {
      return 'Past 5 months';
    } else if (months === 4) {
      return 'Past 4 months';
    } else if (months === 3) {
      return 'Past 3 months';
    } else if (months === 2) {
      return 'Past 2 months';
    } else if (months === 1) {
      return 'Past month';
    }
    let time = now.getTime() - date.getTime();
    let days = time/(1000 * 3600 * 24);
    if (days > 1) {
      return 'Past ' + days + ' days';
    } else if (days === 1) {
      return 'Past day';
    } else {
      return 'Today';
    }
  }

  selectItem(UID: number): void {
    this.router.navigate(['/item/' + UID]);
  }

  showAddress(address: string): string {
    let result = address.substring(0, 6) + '....' + address.substring(address.length - 4);
    return result;
  }

  getRegisterDate(): string {
    let date = new Date(this.seller.registerDate);
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let monthText = '';
    if (month === 0) {
      monthText = 'Jan'
    } else if (month === 1) {
      monthText = 'Feb'
    } else if (month === 2) {
      monthText = 'Mar'
    } else if (month === 3) {
      monthText = 'Apr'
    } else if (month === 4) {
      monthText = 'May'
    } else if (month === 5) {
      monthText = 'Jun'
    } else if (month === 6) {
      monthText = 'Jul'
    } else if (month === 7) {
      monthText = 'Aug'
    } else if (month === 8) {
      monthText = 'Sep'
    } else if (month === 9) {
      monthText = 'Oct'
    } else if (month === 10) {
      monthText = 'Nov'
    } else if (month === 11) {
      monthText = 'Dec'
    }
    return monthText + ' ' + day + ', ' +  year;
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
