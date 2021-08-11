import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({  // module decarator
  declarations: [ // all component class names
    // any component you are creating or using existing angular component, that component  must be registered here..
    AppComponent

  ],
  imports: [ // only module names registtered here
    BrowserModule
  ],
  providers: [], // dependeny injecttion 
  bootstrap: [AppComponent] // stating component ? here it is app-root template url file
})
export class AppModule { }
