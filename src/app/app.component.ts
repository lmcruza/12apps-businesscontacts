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

  ngOnInit(){
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses
    });
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories
    });
  }

  constructor(private _firebaseService: FirebaseService) {
  }
}
