import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentPackage: String = 'Free';
  currentDuration: String = 'Monthly';
  loading: Boolean = false;
  packageAmount: number = 0
  numberOfUsers: number = 1
  totalPrice: number = 0 ;
  discount: number = 0 ;
  packageWithUsers: number = 0 ;
  constructor() { }

  ngOnInit() {
  }

  calculatePrice() {
    this.getPackageFee();
    this.getDurationDiscount();
    this.calcTotalPrice();
  }
  getDurationDiscount(){
    this.packageWithUsers = this.numberOfUsers * this.packageAmount;
    this.discount =  this.currentDuration === 'Annual'? (this.packageWithUsers * 12) * 0.2 : 0; 
  }
  calcTotalPrice(){
    this.totalPrice = this.currentDuration === 'Annual'?  ( this.packageWithUsers * 12 ) - this.discount : (this.packageWithUsers) - this.discount ; 
  }
  getPackageFee() {
    switch (this.currentPackage) {
      case 'Free':
        this.packageAmount = 0;
        break;
      case 'Starter':
        this.packageAmount = 50;
        break;
      case 'Premiure':
        this.packageAmount = 100;
        break;
      default:
        this.packageAmount = 0;
        break;
    }
  }

}
