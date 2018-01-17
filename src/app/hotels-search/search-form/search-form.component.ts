import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output("responseEvent") responseEvent: EventEmitter<any> = new EventEmitter<any>();

  environmentConfig;

  formReference: any;
  pageBlocked: Boolean;
  minTripStartDateValue: Date = new Date();
  minTripEndDateValue: Date = new Date();

  destinationName: string;
  lengthOfStay: Number;
  minTripStartDate: Date;
  maxTripStartDate: Date;
  minStarRating: Number;
  maxStarRating: Number;
  minGuestRating: Number;
  maxGuestRating: Number;
  minTotalRating: Number;
  maxTotalRating: Number;

  constructor(private http: HttpClient, private messageService: MessageService) { }



  ngOnInit() {
    this.environmentConfig = this.loadJSON('/assets/config.json');
    console.log(this.environmentConfig);
    if (!this.environmentConfig || !this.environmentConfig.environmentURL) {
      this.messageService.add({ severity: 'error', summary: 'Validaion Error', detail: 'Error Reading config.json file, please configure the environmentURL property' });
    }
  }


  loadJSON(filePath) {
    const json = this.loadTextFileAjaxSync(filePath, "application/json");
    return JSON.parse(json);
  }

  loadTextFileAjaxSync(filePath, mimeType) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    if (mimeType != null) {
      if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType(mimeType);
      }
    }
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      return xmlhttp.responseText;
    }
    else {
      return null;
    }
  }

  onTripStartDateChange(event) {
    if (this.minTripStartDateValue) {
      this.minTripEndDateValue = this.minTripStartDateValue;
    } else {
      this.minTripEndDateValue = new Date();
    }
  }

  onSubmit() {

    this.messageService.clear();
    if (!this.destinationName) {
      this.messageService.add({ severity: 'error', summary: 'Validaion Error', detail: 'Destination value is required.' });
      return;
    }
    this.pageBlocked = true;
    this.http.get(this.composeURL()).subscribe(
      data => {
        this.responseEvent.emit(data);
        console.log(data);
        this.pageBlocked = false;
      }, err => {
        console.log(err);
        this.pageBlocked = false;
      });
  }

  composeURL(): string {
    var url = 'http://localhost:8080/task/resources/hotels-offers?';
    url += "destinationName=" + this.destinationName;
    if (this.lengthOfStay) {
      url += "&lengthOfStay=" + this.lengthOfStay;
    }
    if (this.minTripStartDate) {
      url += "&minTripStartDate=" + this.formatDate(this.minTripStartDate);
    }
    if (this.maxTripStartDate) {
      url += "&maxTripStartDate=" + this.formatDate(this.maxTripStartDate);
    }
    if (this.minStarRating) {
      url += "&minStarRating=" + this.minStarRating;
    }
    if (this.maxStarRating) {
      url += "&maxStarRating=" + this.maxStarRating;
    }
    if (this.minGuestRating) {
      url += "&minGuestRating=" + this.minGuestRating;
    }
    if (this.maxGuestRating) {
      url += "&maxGuestRating=" + this.maxGuestRating;
    }
    if (this.minTotalRating) {
      url += "&minTotalRating=" + this.minTotalRating;
    }
    if (this.maxTotalRating) {
      url += "&maxTotalRating=" + this.maxTotalRating;
    }
    return url;
  }


  formatDate(dateObject: Date): string {

    var yearPart = dateObject.getFullYear();
    var monthPart: any = dateObject.getMonth() + 1;
    if (monthPart < 10) {
      monthPart = "0" + monthPart;
    }
    var dayPart: any = dateObject.getDate();
    if (dayPart < 10) {
      dayPart = "0" + dayPart;
    }
    return yearPart + "-" + monthPart + "-" + dayPart;

  }

}
