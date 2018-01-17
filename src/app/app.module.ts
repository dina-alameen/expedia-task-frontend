import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HotelsSearchComponent } from './hotels-search/hotels-search.component';
import { SearchFormComponent } from './hotels-search/search-form/search-form.component';
import { SearchResultComponent } from './hotels-search/search-result/search-result.component';
import { SpinnerModule, CalendarModule, BlockUIModule, MessagesModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    HotelsSearchComponent,
    SearchFormComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SpinnerModule,
    CalendarModule,
    MessagesModule,
    BlockUIModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
