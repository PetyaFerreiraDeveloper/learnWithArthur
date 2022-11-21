import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string = 'Learn the weekdays with Arthur';

  selectedLang:string = 'EN';
  selectedCurrency: string = 'INR';

  constructor() { }

  ngOnInit(): void {
  }

  sendLang(event: Event) {
    console.log(event);
    
  }
  sendCurrency(event: Event) {
    console.log(event);
  }

}
