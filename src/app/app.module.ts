import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { ListComponent } from './list/list.component';

import { ListService } from './list/services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
