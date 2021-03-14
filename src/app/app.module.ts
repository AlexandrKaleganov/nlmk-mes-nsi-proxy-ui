import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {EntityModule} from './entity/entity.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    EntityModule,
    AppRoutingModule,
    NgbDropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
