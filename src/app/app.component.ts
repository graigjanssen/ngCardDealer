import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  handFilters = {
    suits: [],
    size: 1,
    min: '',
    max: ''
  }
}
