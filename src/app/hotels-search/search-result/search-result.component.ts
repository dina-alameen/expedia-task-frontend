import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  hotels;

  constructor() { }

  ngOnInit() {
  }


  openOfferDetails(hotelUrl){
    window.open(decodeURIComponent(hotelUrl));
  }
  

}
