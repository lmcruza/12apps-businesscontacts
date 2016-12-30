import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { FirebaseService, Category, Business } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipCode: string;


  ngOnInit(){
    this.appState='default';
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses
    });
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories
    });
  }

  constructor(private _firebaseService: FirebaseService) {
  }

  changeState(state:string, key = null){
    if (key){
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category){
    if (category == '0') {
      category = null;
    }
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    })
  }

  addBusiness(company:string,
      category:string,
      years_in_business:string,
      description:string,
      phone:string,
      email:string,
      street_address:string,
      city:string,
      state:string,
      zipcode:string) {
    var created_at = new Date().toString();
    var newBusiness = {
      company: company,
      description: description,
      category: category,
      years_in_business: years_in_business,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone,
      email: email,
      created_at: created_at
    };
    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default');
  }

  showedit(business){
    this.changeState('editBusiness', business.$key);
    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeYearsInBusiness = business.years_in_business;
    this.activeDescription = business.description;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeStreetAddress = business.street_address;
    this.activeCity = business.city;
    this.activeState = business.state;
    this.activeZipCode = business.zipcode;
  }

  updateBusiness(){
    var updBusiness = {
      company: this.activeCompany,
      description: this.activeDescription,
      category: this.activeCategory,
      years_in_business: this.activeYearsInBusiness,
      street_address: this.activeStreetAddress,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipCode,
      phone: this.activePhone,
      email: this.activeEmail
    };
    this._firebaseService.updateBusiness(this.activeKey, updBusiness);
    this.changeState('default');
  }

  deleteBusiness(key){
    this._firebaseService.deleteBusiness(key);
    this.changeState('default');
  }
}
