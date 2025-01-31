import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.page';
import { Step2Component } from './step2/step2.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ***** Redux *****
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, INITIAL_STATE } from '../redux'

// ***** App *****
import { SharedModule } from './shared.module';
import { ServiceModule } from '../services/services.module';

// ***** Components *****
import { ModalModule } from "../components/modals/modal.module";

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    SharedModule,
    ServiceModule,
    FormsModule,
    StoreModule.forRoot(reducers, { initialState: INITIAL_STATE }),
    StoreDevtoolsModule.instrument({ maxAge: 10, name: '[SNEAKIT]' }),
  ],
  providers: [
    Step1Component,
    Step2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
