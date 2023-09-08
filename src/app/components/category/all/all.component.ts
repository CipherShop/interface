import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  categoryView: number = 0;

  @ViewChild('motors', {read: ElementRef})
  private motorsFragment!: ElementRef;
  @ViewChild('clothing', {read: ElementRef})
  private clothingFragment!: ElementRef;
  @ViewChild('sporting', {read: ElementRef})
  private sportingFragment!: ElementRef;
  @ViewChild('toys', {read: ElementRef})
  private toysFragment!: ElementRef;
  @ViewChild('home', {read: ElementRef})
  private homeFragment!: ElementRef;
  @ViewChild('jewelry', {read: ElementRef})
  private jewleryFragment!: ElementRef;
  @ViewChild('health', {read: ElementRef})
  private healthFragment!: ElementRef;
  @ViewChild('business', {read: ElementRef})
  private businessFragment!: ElementRef;
  @ViewChild('pet', {read: ElementRef})
  private petFragment!: ElementRef;
  @ViewChild('baby', {read: ElementRef})
  private babyFragment!: ElementRef;
  @ViewChild('electronics', {read: ElementRef})
  private electronicsFragment!: ElementRef;
  @ViewChild('collectibles', {read: ElementRef})
  private collectiblesFragment!: ElementRef;
  @ViewChild('books', {read: ElementRef})
  private booksFragment!: ElementRef;

  motorsCategories: any[] = [
    {
      title: 'Auto Parts & Accessories',
      image: 'assets/categories/motors/1.1.png',
      subcategories: [
        'Car & Truck Parts & Accessories',
        'Motorcycle & Scooter Parts & Accessories',
        'Performance & Racing Parts',
        'In-Car Technology, GPS & Security Devices',
        'Boat Parts',
        'ATV, Side-by-Side & UTV Parts & Accessories',
      ],
      more: true
    },
    {
      title: 'Other Vehicles & Trailers',
      image: 'assets/categories/motors/1.2.png',
      subcategories: [
        'RVs & Campers',
        'Commercial Trucks',
        'Buses',
        'Vehicle Trailers',
        'Golf Carts',
        'Aircraft',
      ],
      more: true
    },
    {
      title: 'Motorcycles',
      image: 'assets/categories/motors/1.3.png',
      subcategories: [
        'Harley-Davidson Motorcycles',
        'Honda Motorcycles',
      ],
      more: false
    },
    {
      title: 'Automotive Tools & Supplies',
      image: 'assets/categories/motors/1.4.png',
      subcategories: [
        'Automotive Hand Tools',
        'Automotive Shop Equipment & Supplies',
        'Automotive Diagnostic Service Tools',
        'Automotive Air Tools',
        'Automotive Tool Boxes & Storage',
        'Automotive Paints & Supplies',
      ],
      more: true
    },
    {
      title: 'Powersport Vehicles',
      image: 'assets/categories/motors/1.5.png',
      subcategories: [
        'ATVs',
        'UTVs',
        'Scooters & Mopeds',
        'Snowmobiles',
        'Personal Watercraft',
      ],
      more: false
    },
    {
      title: 'Boats',
      image: 'assets/categories/motors/1.6.png',
      subcategories: [
        'Fishing Boats',
        'Powerboats & Motorboats',
        'Sailboats'
      ],
      more: false
    },
  ];

  clothingCategories: any[] = [
    {
      title: 'Men\'s Clothing, Shoes & Accessories',
      image: 'assets/categories/clothing_shoes_accessories/2.1.jpg',
      subcategories: [
        'Men\'s Shoes',
        'Men\'s Clothing',
        'Men\'s Accessories',
        'Men\'s Jewelry',
      ],
      more: false
    },
    {
      title: 'Women\'s Clothing, Shoes & Accessories',
      image: 'assets/categories/clothing_shoes_accessories/2.2.jpg',
      subcategories: [
        'Women\'s Clothing',
        'Women\'s Shoes',
        'Women\'s Bags & Handbags',
        'Women\'s Accessories',
      ],
      more: false
    },
    {
      title: 'Specialty Clothing, Shoes & Accessories',
      image: 'assets/categories/clothing_shoes_accessories/2.3.jpg',
      subcategories: [
        'Sports Fan Apparel & Souvenirs',
        'Vintage Clothing, Shoes & Accessories',
        'Costume, Reenactment & Theater Apparel',
        'Wedding & Formal Wear',
        'Wedding & Formal Wear',
        'Uniforms & Work Clothing',
        'World & Traditional Clothing',
      ],
      more: true
    },
    {
      title: 'Kid\'s Clothing, Shoes & Accessories',
      image: 'assets/categories/clothing_shoes_accessories/2.4.png',
      subcategories: [
        'Girls\' Clothing, Shoes & Accessories',
        'Boy\'s Clothing, Shoes & Accessories',
        'Kids\' Backpacks & Bags',
        'Unisex Kids',
      ],
      more: false
    },
    {
      title: 'Travel Luggage',
      image: 'assets/categories/clothing_shoes_accessories/2.5.JPG',
      subcategories: [],
      more: false
    },
    {
      title: 'Baby Clothing, Shoes & Accessories',
      image: 'assets/categories/clothing_shoes_accessories/2.6.jpg',
      subcategories: [
        'Baby & Toddler Clothing',
        'Baby Shoes',
      ],
      more: false
    },
  ];

  sportingCategories: any[] = [
    {
      title: 'Sports Memorabilia, Fan Shop & Sports Cards',
      image: 'assets/categories/sporting_goods/3.1.png',
      subcategories: [
        'Sports Trading Cards & Accessories',
        'Sports Fan Apparel & Souvenirs',
        'Original Sport Autographed Items',
        'Vintage Sports Memorabilia',
        'Game Used Sports Memorabilia',
      ],
      more: false
    },
    {
      title: 'Hunting Equipment',
      image: 'assets/categories/sporting_goods/3.2.png',
      subcategories: [
        'Gun Parts',
        'Hunting Scopes, Optics & Lasers',
        'Hunting Holsters, Belts & Pouches',
        'Reloading Press & Equipment',
        'Range & Shooting Equipment',
        'Gun Storage',
      ],
      more: true
    },
    {
      title: 'Golf Equipment',
      image: 'assets/categories/sporting_goods/3.3.png',
      subcategories: [
        'Golf Clubs & Equipment',
        'Golf Club Components',
        'Golf Clothing, Shoes & Accessories',
        'Golf Accessories',
        'Golf Tech',
        'Golf Training Aids',
      ],
      more: true
    },
    {
      title: 'Cycling Equipment',
      image: 'assets/categories/sporting_goods/3.4.png',
      subcategories: [
        'Bikes',
        'Bike Components & Parts',
        'Vintage Cycling Equipment',
        'Bicycle Tires, Tubes & Wheels',
        'Bike Frames',
        'Bicycle Accessories',
      ],
      more: true
    },
    {
      title: 'Outdoor Sports',
      image: 'assets/categories/sporting_goods/3.5.png',
      subcategories: [
        'Archery Equipment',
        'Air Guns & Slingshots',
        'Equestrian Equipment',
        'Scooters',
        'Skateboarding & Longboarding Equipment',
        'Paintball Equipment',
      ],
      more: true
    },
    {
      title: 'Fishing Equipment & Supplies',
      image: 'assets/categories/sporting_goods/3.6.png',
      subcategories: [
        'Fishing Reels',
        'Fishing Baits, Lures & Flies',
        'Fishing Rods & Poles',
        'Vintage Fishing Equipment',
        'Fishing Equipment',
        'Fishing Terminal Tackle',
      ],
      more: true
    },
    {
      title: 'Team Sports',
      image: 'assets/categories/sporting_goods/3.7.png',
      subcategories: [
        'Soccer Equipment',
        'Baseball & Softball Equipment',
        'Football Gear',
        'Bowling Equipment',
        'Basketball Equipment',
        'Field, Ice & Roller Hockey Gear',
      ],
      more: true
    },
    {
      title: 'Camping & Hiking Equipment',
      image: 'assets/categories/sporting_goods/3.8.png',
      subcategories: [
        'Camping Cooking Supplies',
        'Camping & Hiking Lighting',
        'Camping Tents & Canopies',
        'Camping & Hiking Knives & Tools',
        'Camping & Hiking Backpacks & Bags',
        'Camping Furniture',
      ],
      more: true
    },
    {
      title: 'Fitness, Running & Yoga Equipment',
      image: 'assets/categories/sporting_goods/3.9.png',
      subcategories: [
        'Cardio Equipment',
        'Strength Training Equipment',
        'Fitness Technology',
        'Fitness Equipment & Gear',
        'Exercise Clothing & Accessories',
      ],
      more: false
    },
    {
      title: 'Water Sports',
      image: 'assets/categories/sporting_goods/3.10.png',
      subcategories: [
        'Kayaking, Canoeing & Rafting Equipment',
        'Scuba & Snorkeling Equipment',
        'Swimwear & Safety Equipment',
        'Surfing Equipment',
      ],
      more: false
    },
    {
      title: 'Winter Sports',
      image: 'assets/categories/sporting_goods/3.11.png',
      subcategories: [
        'Skiing, Snowboarding & Snowshoeing',
        'Winter Sports Clothing',
      ],
      more: false
    },
    {
      title: 'Indoor Games',
      image: 'assets/categories/sporting_goods/3.12.png',
      subcategories: [
        'Billiards Equipment',
      ],
      more: false
    },
  ];

  toysCategories: any[] = [
    {
      title: 'Action Figures & Accessories',
      image: 'assets/categories/toys_hobbies/4.1.png',
      subcategories: [
        'Action Figures',
      ],
      more: false
    },
    {
      title: 'Collectible Card Games & Accessories',
      image: 'assets/categories/toys_hobbies/4.2.png',
      subcategories: [
        'Individual Collectible Card Game Cards',
        'Sealed Collectible Card Game Boxes',
        'Sealed Collectible Card Game Packs',
        'Collectible Card Game Mixed Card Lots',
        'Collectible Card Game Supplies & Accessories',
      ],
      more: false
    },
    {
      title: 'Video Games',
      image: 'assets/categories/toys_hobbies/4.3.jpg',
      subcategories: [
      ],
      more: false
    },
    {
      title: 'Diecast & Toy Vehicles',
      image: 'assets/categories/toys_hobbies/4.4.png',
      subcategories: [
        'Diecast Cars, Trucks & Vans',
        'Diecast Racing Cars',
        'Diecast Farm Vehicles',
        'Diecast Aircraft & Spacecraft',
        'Diecast & Toy Vehivle Accessories, Parts & Display',
        'Diecast Construction Equipment',
      ],
      more: true
    },
    {
      title: 'Games',
      image: 'assets/categories/toys_hobbies/4.5.png',
      subcategories: [
        'Miniatures & War Games',
        'Board & Traditional Games',
        'Role Playing Games',
        'Electronic Games',
        'Chess',
        'Card Games & Poker',
      ],
      more: true
    },
    {
      title: 'Building Toys',
      image: 'assets/categories/toys_hobbies/4.6.png',
      subcategories: [
        'LEGO (R) Building Toys',
        'Building Toys & Blocks',
      ],
      more: false
    },
    {
      title: 'RC Model Vehicles, Toys & Control Line',
      image: 'assets/categories/toys_hobbies/4.7.png',
      subcategories: [
        'Hobby RC Model Vehicle Parts & Accessories',
        'Hobby RC Model Vehicles & Kits',
      ],
      more: false
    },
    {
      title: 'Model Trains',
      image: 'assets/categories/toys_hobbies/4.8.png',
      subcategories: [
        'Model Railroads & Trains',
      ],
      more: false
    },
    {
      title: 'Toy Models & Kits',
      image: 'assets/categories/toys_hobbies/4.9.png',
      subcategories: [
        'Automotive Models & Kits',
        'Aircraft Models & Kits',
        'Figure Models & Kits',
        'Boat & Ship Models & Kits',
      ],
      more: false
    },
    {
      title: 'Preschool Toys & Pretend Play',
      image: 'assets/categories/toys_hobbies/4.10.png',
      subcategories: [
        'Littlest Pet Shop Toys',
        'Fisher-Price Preschool Toys',
      ],
      more: false
    },
    {
      title: 'Stuffed Animals',
      image: 'assets/categories/toys_hobbies/4.11.png',
      subcategories: [
        'Other Stuffed Animals',
        'Vintage Stuffed Animals',
      ],
      more: false
    },
    {
      title: 'Vintage & Antique Toys',
      image: 'assets/categories/toys_hobbies/4.12.png',
      subcategories: [
        'Other Vintage & Antique Toys',
      ],
      more: false
    },
    {
      title: 'Outdoor Toys & Structures',
      image: 'assets/categories/toys_hobbies/4.13.png',
      subcategories: [
        'Dart Guns & Soft Darts',
        'Sand & Water Toys',
        'Tricycles & Ride On Toys',
        'Pedal Cars',
      ],
      more: false
    },
    {
      title: 'Beanbag Plushies',
      image: 'assets/categories/toys_hobbies/4.14.png',
      subcategories: [
        'Ty Beanbag Plushies',
      ],
      more: false
    },
  ];

  homeCategories: any[] = [
    {
      title: 'Home Décor',
      image: 'assets/categories/home_garden/5.1.png',
      subcategories: [
        'Antiques',
        'Art',
        'Pottery & Glass',
        'Decorative Clocks',
        'Home Décor Posters & Prints',
        'Decorative Accessories',
      ],
      more: true
    },
    {
      title: 'Yard, Garden & Outdoor Living Items',
      image: 'assets/categories/home_garden/5.2.png',
      subcategories: [
        'Outdoor Power Equipment',
        'Lawn Mowers, Parts & Accessories',
        'Plants, Seeds & Bulbs',
        'Pools & Spas',
        'Outdoor Heating, Cooking & Eating',
        'Patio & Garden Furniture',
      ],
      more: true
    },
    {
      title: 'Kitchen, Dining & Bar Supplies',
      image: 'assets/categories/home_garden/5.3.png',
      subcategories: [
        'Small Kitchen Appliances',
        'Kitchen, Dinig & Bar Storage Equipment',
        'Dinnerware & Serveware',
        'Flatware, Knives & Cutlery',
        'Kitchen Tools & Gadgets',
        'Cookware',
      ],
      more: true
    },
    {
      title: 'Tools & Workshop Equipment',
      image: 'assets/categories/home_garden/5.4.png',
      subcategories: [
        'Power Tools',
        'Hand Tools',
        'Power Tool & Air Tool Accessories',
        'Tool Boxes & Storage',
        'Air Tools & Air Compressors',
        'Workshop Equipment',
      ],
      more: true
    },
    {
      title: 'Home Furniture',
      image: 'assets/categories/home_garden/5.5.png',
      subcategories: [
        'Tables',
        'Beds & Headboards',
        'Chairs',
        'Sofas, Armchairs & Couches',
        'Dining Furniture Sets',
        'Cabinets & Cupboards',
      ],
      more: true
    },
    {
      title: 'Home Improvement',
      image: 'assets/categories/home_garden/5.6.png',
      subcategories: [
        'Home HVAC, Parts & Accessories',
        'Building & Hardware Supplies',
        'Electrical Supplies',
        'Home Plumbing & Fixtures',
        'Home Security Equipment',
      ],
      more: false
    },
    {
      title: 'Major Appliances, Parts & Accessories',
      image: 'assets/categories/home_garden/5.7.png',
      subcategories: [
        'Major Appliances Parts & Accessories',
        'Ranges & Cooking Appliances',
        'Refrigerators, Freezers, Parts & Accessories',
        'Washers, Dryers, Parts & Accessories',
      ],
      more: false
    },
    {
      title: 'Household & Cleaning Supplies',
      image: 'assets/categories/home_garden/5.8.png',
      subcategories: [
        'Vacuum Cleaners',
        'Home Organization Supplies',
        'Vacuum Cleaner Parts',
        'General Household Supplies',
        'General Laundry Supplies',
        'General Cleaning Products',
      ],
      more: true
    },
    {
      title: 'Bedding',
      image: 'assets/categories/home_garden/5.9.png',
      subcategories: [
        'Bed Sheets',
        'Blankets & Throws',
        'Quilts, Bedspreads & Coverlets',
        'Comforters & Sets',
        'Duvet Covers & Bedding Sets',
        'Nursery Bedding',
      ],
      more: true
    },
    {
      title: 'Lamps, Lighting & Ceiling Fans',
      image: 'assets/categories/home_garden/5.10.png',
      subcategories: [
        'Lamps',
        'Chandeliers & Ceiling Fixtures',
        'Light Bulbs',
        'Ceiling Fans',
        'Lighting Parts',
        'String & Fairy Lights',
      ],
      more: true
    },
    {
      title: 'Surveillance & Smart Home Electronics',
      image: 'assets/categories/home_garden/5.11.png',
      subcategories: [
        'Home Surveillance Systems',
        'Smart Speakers, Hubs & Accessories',
        'Other Smart Home Electronics',
      ],
      more: false
    },
    {
      title: 'Food & Beverages',
      image: 'assets/categories/home_garden/5.12.png',
      subcategories: [
        'Pantry',
        'Coffee, Tea & Soft Drinks',
      ],
      more: false
    },
    {
      title: 'Bathroom Fixtures, Accessories & Supplies',
      image: 'assets/categories/home_garden/5.13.png',
      subcategories: [
        'Bathroom Supplies & Accessories',
        'Showers, Bathtubs & Parts',
        'Shower & Bathtub Accessories',
        'Bathroom Sinks & Vanities',
        'Toilets & Bidets'
      ],
      more: false
    },
    {
      title: 'Greeting Cards & Party Supplies',
      image: 'assets/categories/home_garden/5.14.png',
      subcategories: [
        'Party Supplies',
        'Gift Wrapping Supplies',
        'Greeting Cards & Invitations',
      ],
      more: false
    },
    {
      title: 'Candles & Home Fragrance',
      image: 'assets/categories/home_garden/5.15.jpg',
      subcategories: [
        'Home Fragrance',
        'Candles',
        'Candle Holders & Accessories',
      ],
      more: false
    },
    {
      title: 'Rugs & Carpets',
      image: 'assets/categories/home_garden/5.16.png',
      subcategories: [
        'Area Rugs',
      ],
      more: false
    },
    {
      title: 'Holiday & Seasonal Décor',
      image: 'assets/categories/home_garden/5.17.JPG',
      subcategories: [
        'Seasonal Ornaments',
      ],
      more: false
    },
  ];

  jewelryCategories: any[] = [
    {
      title: 'Watches, Parts & Accessories',
      image: 'assets/categories/jewelry_watches/6.1.png',
      subcategories: [
        'Watches',
        'Watch Accessories',
        'Watch Parts, Tools & Guides',
      ],
      more: false
    },
    {
      title: 'Fine Jewelry',
      image: 'assets/categories/jewelry_watches/6.2.JPG',
      subcategories: [
        'Fine Rings',
        'Fine Necklaces & Pendants',
        'Fine Bracelets & Charms',
        'Fine Earrings',
      ],
      more: false
    },
    {
      title: 'Fashion Jewelry',
      image: 'assets/categories/jewelry_watches/6.3.JPG',
      subcategories: [
        'Fashion Necklaces & Pendants',
        'Fashion Bracelets & Charms',
        'Fashion Earrings',
        'Fashion Rings',
        'Fashion Brooches & Pins',
        'Fashion Jewelry Sets',
      ],
      more: true
    },
    {
      title: 'Vintage & Antique Jewelry',
      image: 'assets/categories/jewelry_watches/6.4.JPG',
      subcategories: [
        'Vintage & Antique Necklaces & Pendants',
        'Vintage & Antique Brooches & Pins',
        'Vintage & Antique Bracelets & Charms',
        'Vintage & Antique Rings',
        'Vintage & Antique Collections & Lots',
        'Vintage & Antique Earrings',
      ],
      more: true
    },
    {
      title: 'Men\'s Jewelry',
      image: 'assets/categories/jewelry_watches/6.5.JPG',
      subcategories: [
        'Men\'s Necklaces & Pendants',
        'Men\'s Rings',
        'Men\'s Bracelets & Charms',
        'Men\'s Cufflinks',
      ],
      more: false
    },
    {
      title: 'Loose Diamonds & Gemstones',
      image: 'assets/categories/jewelry_watches/6.6.JPG',
      subcategories: [
        'Loose Gemstones',
        'Loose Diamonds',
      ],
      more: false
    },
    {
      title: 'Engagement & Wedding Jewelry',
      image: 'assets/categories/jewelry_watches/6.7.JPG',
      subcategories: [
        'Engagement Rings',
      ],
      more: false
    },
    {
      title: 'Ethnic, Regional & Tribal Jewelry',
      image: 'assets/categories/jewelry_watches/6.8.JPG',
      subcategories: [
        'Ethnic & Regional Necklaces & Pendants',
        'Ethnic & Regional Bracelets & Charms',
        'Ethnic & Regional Rings',
      ],
      more: false
    },
  ];

  healthCategories: any[] = [
    {
      title: 'Fragrances',
      image: 'assets/categories/health_beauty/7.1.png',
      subcategories: [
        'Fragrances for Women',
        'Fragrances for Men',
        'Unisex Fragrances',
      ],
      more: false
    },
    {
      title: 'Hair Care & Styling Products',
      image: 'assets/categories/health_beauty/7.2.png',
      subcategories: [
        'Hair Extensions & Wigs',
        'Shampoos & Conditioners',
        'Hair Styling Devices',
        'Hair Loss Treatments',
        'Hair Color Products',
        'Hair Styling Products'
      ],
      more: true
    },
    {
      title: 'Skin Care Products',
      image: 'assets/categories/health_beauty/7.3.png',
      subcategories: [
        'Anti-Aging Products',
        'Skin Care Moisturizers',
        'Skin Brightening Creams',
        'Acne & Blemish Treatments',
        'Lip Balm & Treatments',
        'Skin Cleansers & Toners',
      ],
      more: true
    },
    {
      title: 'Vitamins & Lifestyle Supplements',
      image: 'assets/categories/health_beauty/7.4.png',
      subcategories: [
        'Vitamin & Mineral Health Suppleements',
        'Weight Management Supplements',
        'Dietary Sports Supplements',
        'Endurance & Energy Bars, Drinks & Pills',
        'Dietary Supplements',
      ],
      more: false
    },
    {
      title: 'Makeup Products',
      image: 'assets/categories/health_beauty/7.5.png',
      subcategories: [
        'Face Makeup Products',
        'Eye Makeup',
        'Lip Makeup',
        'Makeup Bags & Cases',
        'Makeup Tools & Accessories',
      ],
      more: false
    },
    {
      title: 'Health Care Products',
      image: 'assets/categories/health_beauty/7.6.png',
      subcategories: [
        'Over-The-Counter Medications & Treatments',
        'Diabetic Care',
        'Sleeping Aids',
        'First Aid Products',
        'Medical Monitoring & Testing Equipment',
        'Foot Creams & Treatments'
      ],
      more: true
    },
    {
      title: 'Medical & Mobility',
      image: 'assets/categories/health_beauty/7.7.png',
      subcategories: [
        'Mobility/Walking Equipment',
        'Daily Living Aids',
        'Orthopedic Products & Supports',
        'Mobility Furniture & Fixtures'
      ],
      more: false
    },
    {
      title: 'Vision Care Products',
      image: 'assets/categories/health_beauty/7.8.png',
      subcategories: [
        'Eyeglass Frames',
        'Reading Glasses',
        'Eyeglass Cases & Storage',
      ],
      more: false
    },
    {
      title: 'Shaving & Hair Removal Products',
      image: 'assets/categories/health_beauty/7.9.png',
      subcategories: [
        'Electric Shaver Parts',
        'Razors & Razor Blades',
      ],
      more: false
    },
    {
      title: 'Bath & Body Products',
      image: 'assets/categories/health_beauty/7.10.png',
      subcategories: [
        'Deodorants & Antiperspirants',
        'Body Bar Soaps',
        'Body Washes & Shower Gels',
        'Body Sprays & Mists',
      ],
      more: false
    },
    {
      title: 'Manicure, Pedicure & Nail Care Products',
      image: 'assets/categories/health_beauty/7.11.png',
      subcategories: [
        'Nail Polish & Powders',
        'Nail Art Products',
        'Nail Care Tools',
      ],
      more: false
    },
    {
      title: 'Natural & Alternative Remedies',
      image: 'assets/categories/health_beauty/7.12.png',
      subcategories: [
        'Herbal Remedies & Resins',
        'Aromatherapy Supplies',
      ],
      more: false
    },
    {
      title: 'Oral Care Products',
      image: 'assets/categories/health_beauty/7.13.png',
      subcategories: [
        'Electric Oral & Dental Care',
        'Teeth Whitening Products',
      ],
      more: false
    },
  ];

  businessCategories: any[] = [
    {
      title: 'Heavy Equipment, Parts & Attachments',
      image: 'assets/categories/business_industrial/8.1.png',
      subcategories: [
        'Heavy Equipment',
        'Heavy Equipment Parts & Accessories',
        'Heavy Equipment Attachments',
      ],
      more: false
    },
    {
      title: 'Healthcare, Lab & Dental',
      image: 'assets/categories/business_industrial/8.2.png',
      subcategories: [
        'Medical & Lab Equipment, Devices',
        'Handpieces & Instruments',
        'Medical, Lab & Dental Supplies',
        'Medical, Lab & Caregiving Furniture',
        'Medical/Lab Equipment Attachments & Accessories',
      ],
      more: false
    },
    {
      title: 'Restaurant & Food Service',
      image: 'assets/categories/business_industrial/8.3.png',
      subcategories: [
        'Food Trucks, Trailers & Carts',
        'Commercial Kitchen Equipment',
        'Vending Machines & Dispensers',
        'Commercial Refrigeration Equipment',
        'Commercial Bar & Beverage Equipment',
      ],
      more: false
    },
    {
      title: 'CNC, Metalworking & Manufacturing',
      image: 'assets/categories/business_industrial/8.4.png',
      subcategories: [
        'Welding & Soldering Equipment',
        'Metalworking Equipment',
        'Metalworking Inspection & Measurement',
        'Raw Materials',
        'Woodworking Equipment',
        'Workholding & Toolholding Supplies'
      ],
      more: true
    },
    {
      title: 'Office Equipment & Supplies',
      image: 'assets/categories/business_industrial/8.5.png',
      subcategories: [
        'Office Equipment',
        'Office Supplies',
        'Office Furniture',
        'Projectors & Presentation Equipment',
      ],
      more: false
    },
    {
      title: 'Industrial Automation & Motion Controls',
      image: 'assets/categories/business_industrial/8.6.png',
      subcategories: [
        'Control Systems & PLCs',
        'Industrial Electric Motors',
        'Drives & Starters',
      ],
      more: false
    },
    {
      title: 'Electrical Equipment & Supplies',
      image: 'assets/categories/business_industrial/8.7.png',
      subcategories: [
        'Electronic Components & Semiconductors',
        'Circuit Breakers & Disconnectors',
        'Wire, Cable & Conduit',
        'Electrical Boxes, Panes & Boards',
        'Industrial Switches',
        'Industrial Transformers'
      ],
      more: true
    },
    {
      title: 'Light Industrial Equipment & Tools',
      image: 'assets/categories/business_industrial/8.8.png',
      subcategories: [
        'Industrial Generators',
        'Pipe Tools',
        'Electrical Tools',
        'Industrial Hand Tools',
        'Industrial Stationary Engines, Parts & Accessories',
        'Industrial Drills & Hammers'
      ],
      more: true
    },
    {
      title: 'Test, Measurement & Inspection Equipment',
      image: 'assets/categories/business_industrial/8.9.png',
      subcategories: [
        'Test Meters & Detectors',
        'Analyzers & Data Acquisition Equipment',
        'Levels & Surveying Equipment'
      ],
      more: false
    },
    {
      title: 'Hydraulics, Pneumatics, Pumps & Plumbing',
      image: 'assets/categories/business_industrial/8.10.png',
      subcategories: [
        'Pump & Pump Accessories',
        'Valves & Manifolds',
        'Air Compressors & Blowers',
        'Fittings & Adapters',
      ],
      more: false
    },
    {
      title: 'Material Handling',
      image: 'assets/categories/business_industrial/8.11.png',
      subcategories: [
        'Picking & Shiping',
        'Warehouse Loading & Unloading',
        'Shipping Containers',
      ],
      more: false
    },
    {
      title: 'Facility Maintenance & Safety',
      image: 'assets/categories/business_industrial/8.12.png',
      subcategories: [
        'Personal Protective Equipment (PPE)',
        'Access Control Equipment',
        'Industrial Fire Protection Equipment',
        'Industrial Surveillance & Alarm Equipment',
      ],
      more: false
    },
    {
      title: 'Agriculture & Forestry Equipment',
      image: 'assets/categories/business_industrial/8.13.png',
      subcategories: [
        'Livestock Supplies',
      ],
      more: false
    },
  ];

  petCategories: any[] = [
    {
      title: 'Dog Supplies',
      image: 'assets/categories/pet_supplies/9.1.JPG',
      subcategories: [
        'Dog Clothing & Shoes',
        'Dog Training & Obedience Supplies',
        'Dog Topical Flea & Tick Remedies & Collars',
        'Dog Collars',
        'Dog Grooming Supplies',
        'Dog Transport & Travel Supplies'
      ],
      more: true
    },
    {
      title: 'Fish & Aquariums',
      image: 'assets/categories/pet_supplies/9.2.JPG',
      subcategories: [
        'Live Aquarium Fish',
        'Aquariums & Tanks',
        'Live Aquarium Invertebrates',
        'Live Aquarium Plants',
        'Aquarium Decorations',
      ],
      more: false
    },
  ];

  babyCategories: any[] = [
    {
      title: 'Baby Clothing, Shoes & Accessories',
      image: 'assets/categories/baby_essentials/10.1.jpg',
      subcategories: [
        'Baby & Toddler Clothing',
        'Baby Shoes',
      ],
      more: false
    },
  ];

  electronicsCategories: any[] = [
    {
      title: 'Computers, Tablets & Network Hardware',
      image: 'assets/categories/electronics/11.1.png',
      subcategories: [
        'Computer Components & Parts',
        'Laptops & Netbooks',
        'Tablets & eReaders',
        'Desktops & All-In-One Computers',
        'Laptop & Desktop Accessories',
        'Computer Printers, Scanners & Supplies'
      ],
      more: true
    },
    {
      title: 'Cell Phones, Smart Watches & Accessories',
      image: 'assets/categories/electronics/11.2.png',
      subcategories: [
        'Cell Phones & Smartphones',
        'Cell Phone Accessories',
        'Portable Audio & Headphones',
        'Smart Watches',
        'Cell Phone & Smartphone Parts',
        'Cell Phone Cards & SIM Cards'
      ],
      more: true
    },
    {
      title: 'Video Games & Consoles',
      image: 'assets/categories/electronics/11.3.png',
      subcategories: [
        'Video Games',
        'Video Game Consoles',
        'Video Game Accessories',
        'Video Game Merchandise',
        'Video Game Replacement Parts & Tools',
        'Prepaid Gaming Cards'
      ],
      more: true
    },
    {
      title: 'Cameras & Photo',
      image: 'assets/categories/electronics/11.4.png',
      subcategories: [
        'Digital Cameras',
        'Camera Lenses & Filters',
        'Film Photography Equipment',
        'Camcorders',
        'Camera, Drone & Photo Accessories',
        'Vintage Movie & Photography Equipment'
      ],
      more: true
    },
    {
      title: 'TV, Video & Home Audio Electronics',
      image: 'assets/categories/electronics/11.5.png',
      subcategories: [
        'Home Audio Equipment',
        'TV & Video Equipment',
        'TV, Video & Audio Parts',
        'TV, Video & Audio Accessories',
        'Media Streamers'
      ],
      more: false
    },
    {
      title: 'Vehicle Electronics & GPS',
      image: 'assets/categories/electronics/11.6.png',
      subcategories: [
        'Car Audio in Consumer Electronics',
        'Car Video Monitors & Equipment',
        'Car Audio & Video Installation Equipment',
        'Car Electronics Accessories',
        'Marine Audio in Consumer Electronics',
        'Car GPS Units'
      ],
      more: true
    },
    {
      title: 'Portable Audio & Headphones',
      image: 'assets/categories/electronics/11.7.png',
      subcategories: [
        'Headphones',
        'MP3 Players',
        'Audio Player Docks & Mini Speakers',
        'Personal Cassette Players',
        'Portable Stereos & Boomboxes',
        'Portable AM/FM Radios',
      ],
      more: true
    },
    {
      title: 'Major Appliances, Parts & Accessories',
      image: 'assets/categories/electronics/11.8.png',
      subcategories: [
        'Major Appliances Parts & Accessories',
        'Ranges & Cooking Appliances',
        'Refrigerators, Freezers, Parts & Accessories',
        'Washers, Dryers, Parts & Accessories',
      ],
      more: false
    },
    {
      title: 'Surveillance & Smart Home Electronics',
      image: 'assets/categories/electronics/11.9.png',
      subcategories: [
        'Home Surveillance Systems',
        'Smart Speakers, Hubs & Accessories',
        'Other Smart Home Electronics'
      ],
      more: false
    },
    {
      title: 'Home Surveillance Systems',
      image: 'assets/categories/electronics/11.10.JPG',
      subcategories: [
        'Home Security Cameras',
        'IP & Smart Security Camera Systems',
        'Home Surveillance Parts & Accessories'
      ],
      more: false
    },
  ];

  collectiblesCategories: any[] = [
    {
      title: 'Collectibles',
      image: 'assets/categories/collectibles_art/12.1.png',
      subcategories: [
        'Collectible Knives, Swords, Blades, Armors & Accessories',
        'Comic Books, Manga & Memorabilia',
        'Tobacciana',
        'Militaria',
        'Decorative Collectibles',
        'Disneyana'
      ],
      more: true
    },
    {
      title: 'Sports Memorabilia, Fan Shop & Sports Cards',
      image: 'assets/categories/collectibles_art/12.2.png',
      subcategories: [
        'Sports Trading Cards & Accessories',
        'Sports Fan Apparel & Souvenirs',
        'Original Sport Autographed Items',
        'Vintage Sports Memorabilia',
        'Game Used Sports Memorabilia',
      ],
      more: false
    },
    {
      title: 'Coins & Paper Money',
      image: 'assets/categories/collectibles_art/12.3.png',
      subcategories: [
        'US Coins',
        'World Coins',
        'Bullion',
        'US Paper Money',
        'World Paper Money',
        'Ancient Coins'
      ],
      more: true
    },
    {
      title: 'Antiques',
      image: 'assets/categories/collectibles_art/12.4.png',
      subcategories: [
        'Antique Furniture',
        'Asian Antiques',
        'Achitectural & Garden Antiques',
        'Silver Antiques',
        'Antique Primitives',
        'Maritime Antiques'
      ],
      more: true
    },
    {
      title: 'Dolls & Teddy Bears',
      image: 'assets/categories/collectibles_art/12.5.png',
      subcategories: [
        'Dolls, Clothing & Accessories',
        'Dollhouses & Dollhouse Miniatures',
        'Teddy Bears, Clothing & Accessories',
      ],
      more: false
    },
    {
      title: 'Art & Craft Supplies',
      image: 'assets/categories/collectibles_art/12.6.png',
      subcategories: [
        'Sewing Tools & Supplies',
        'Yarn, Sewing & Needlecraft Supplies',
        'Fabric',
        'Scrapbooking & Paper Craft Supplies',
        'Art Supplies',
        'Home Art & Crafts'
      ],
      more: true
    },
    {
      title: 'Art',
      image: 'assets/categories/collectibles_art/12.7.png',
      subcategories: [
        'Art Prints',
        'Art Paintings',
        'Art Photographs',
        'Art Posters',
        'Art Sculptures',
      ],
      more: false
    },
    {
      title: 'Pottery & Glass',
      image: 'assets/categories/collectibles_art/12.8.png',
      subcategories: [
        'Decorative Cookware, Dinnerware & Serveware',
      ],
      more: false
    },
    {
      title: 'Entertainment Memorabilia',
      image: 'assets/categories/collectibles_art/12.9.png',
      subcategories: [
        'Music Memorabilia',
        'Movie Memorabilia',
        'Original Autographed Entertainment Memorabilia'
      ],
      more: false
    },
    {
      title: 'Vintage & Antique Jewelry',
      image: 'assets/categories/collectibles_art/12.10.JPG',
      subcategories: [
        'Vintage & Antique Necklaces & Pendants',
        'Vintage & Antique Brooches & Pins',
        'Vintage & Antique Bracelets & Charms',
        'Vintage & Antique Rings',
        'Vintage & Antique Collections & Lots',
        'Vintage & Antique Earrings' 
      ],
      more: true
    },
    {
      title: 'Stamps',
      image: 'assets/categories/collectibles_art/12.11.png',
      subcategories: [
        'United States Stamps',
        'European Stamps',
        'Asian Stamps',
        'Middle Eastern Stamps', 
      ],
      more: false
    },
  ];

  booksCategories: any[] = [
    {
      title: 'Books & Magazines',
      image: 'assets/categories/books_movies_music/13.1.png',
      subcategories: [
        'Comic Books, Manga & Memorabilia',
        'Books',
        'Tablets & eReaders',
        'Antiquarian & Collectible Books',
        'Magazines',
        'Textbooks, Educational & Reference Books'
      ],
      more: true
    },
    {
      title: 'Musical Instruments & Gear',
      image: 'assets/categories/books_movies_music/13.2.png',
      subcategories: [
        'Guitars & Basses',
        'Pro Audio Equipment',
        'Pianos, keyboards & Organs',
        'Percussion Instruments',
        'Wind & Woodwind Instruments',
        'Brass Instruments',
      ],
      more: true
    },
    {
      title: 'Music',
      image: 'assets/categories/books_movies_music/13.3.JPG',
      subcategories: [
        'Vinyl Recors',
        'Music CDs',
        'Music Cassettes',
        'Other Music Formats',
      ],
      more: false
    },
    {
      title: 'Movies & TV',
      image: 'assets/categories/books_movies_music/13.4.png',
      subcategories: [
        'DVDs & Blu-ray Discs',
        'VHS Tapes',
      ],
      more: false
    },
  ];

  constructor(){}
  
  @HostListener('window:scroll', ['$event'])
  private updateActiveFragment(event: any) {
    event.preventDefault();
    switch (true) {
      
      case window.pageYOffset >= (this.motorsFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.clothingFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 0;
        break;
      }
      
      case window.pageYOffset >= (this.clothingFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.sportingFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 1;
        break;
      }
      
      case window.pageYOffset >= (this.sportingFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.toysFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 2;
        break;
      }
      
      case window.pageYOffset >= (this.toysFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.homeFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 3;
        break;
      }
      
      case window.pageYOffset >= (this.homeFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.jewleryFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 4;
        break;
      }
      
      case window.pageYOffset >= (this.jewleryFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.healthFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 5;
        break;
      }
      
      case window.pageYOffset >= (this.healthFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.businessFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 6;
        break;
      }
      
      case window.pageYOffset >= (this.businessFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.petFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 7;
        break;
      }
      
      case window.pageYOffset >= (this.petFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.babyFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 8;
        break;
      }
      
      case window.pageYOffset >= (this.babyFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.electronicsFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 9;
        break;
      }
      
      case window.pageYOffset >= (this.electronicsFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.collectiblesFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 10;
        break;
      }
      
      case window.pageYOffset >= (this.collectiblesFragment.nativeElement.offsetTop - 84) &&
      window.pageYOffset < (this.booksFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 11;
        break;
      }
      
      case window.pageYOffset >= (this.booksFragment.nativeElement.offsetTop - 84): {
        this.categoryView = 12;
        break;
      }

      default:
        break;
    }
  }  

}
