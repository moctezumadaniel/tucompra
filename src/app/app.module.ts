import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarModule } from './top-bar/top-bar.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
