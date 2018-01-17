import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultComponent } from "./search-result/search-result.component";

@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html',
  styleUrls: ['./hotels-search.component.css']
})
export class HotelsSearchComponent implements OnInit {

  @ViewChild("searchResultComponent") searchResult: SearchResultComponent;
  constructor() { }

  ngOnInit() {
  }

  onResponse(eventData) {
    this.searchResult.hotels = eventData;
  }

}
