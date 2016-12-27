import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCe8y4sexjnRUhFC7Zwz0IIDlTFIZwORLI",
    authDomain: "businesscontacts-c0362.firebaseapp.com",
    databaseURL: "https://businesscontacts-c0362.firebaseio.com",
    storageBucket: "businesscontacts-c0362.appspot.com",
    messagingSenderId: "903439857675"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
