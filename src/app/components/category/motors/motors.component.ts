import { Component } from '@angular/core';

@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css']
})
export class MotorsComponent {

  partsCategories: any[] = [
    {
      title: 'Wheels, Tires & Parts',
      image: '',
      router: ''
    },
    {
      title: 'Exterior Parts',
      image: '',
      router: ''
    },
    {
      title: 'Interior Parts',
      image: '',
      router: ''
    },
    {
      title: 'Lighting & Lamps',
      image: '',
      router: ''
    },
    {
      title: 'Steering & Suspension',
      image: '',
      router: ''
    },
    {
      title: 'Engines & Engine Parts',
      image: '',
      router: ''
    },
    {
      title: 'Air & Fuel Delivery',
      image: '',
      router: ''
    },
    {
      title: 'Transmission & Drivetrain',
      image: '',
      router: ''
    },
    {
      title: 'Brakes & Brake Parts',
      image: '',
      router: ''
    },
    {
      title: 'Shop all Car & Truck Parts',
      image: '',
      router: ''
    },
  ];

  otherPartsCategories: any[] = [
    {
      title: 'Motorcycle & Scooter Parts',
      image: '',
      router: ''
    },
    {
      title: 'ATV, Side-by-Side & UTV Parts',
      image: '',
      router: ''
    },
    {
      title: 'Boat Parts',
      image: '',
      router: ''
    },
    {
      title: 'Performance & Racing Parts',
      image: '',
      router: ''
    },
    {
      title: 'Shop all Parts & Accessories',
      image: '',
      router: ''
    },
  ];

  vehiclesCategories: any[] = [
    {
      title: 'Cars & Trucks',
      image: '',
      router: ''
    },
    {
      title: 'Motorcycles',
      image: '',
      router: ''
    },
    {
      title: 'Powersports',
      image: '',
      router: ''
    },
    {
      title: 'Classics',
      image: '',
      router: ''
    },
    {
      title: 'Exotics',
      image: '',
      router: ''
    },
    {
      title: 'Commercial Trucks',
      image: '',
      router: ''
    },
    {
      title: 'RVs & Campers',
      image: '',
      router: ''
    },
    {
      title: 'Boats',
      image: '',
      router: ''
    },
    {
      title: 'Other Vehicles & Trailers',
      image: '',
      router: ''
    },
    {
      title: 'Electric & Hybrids',
      image: '',
      router: ''
    },
  ];

}
