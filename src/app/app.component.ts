import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  handFilters = {
    suits: {
      spade: true,
      club: true,
      diamond: true,
      heart: true
    },
    size: 5,
    min: '2',
    max: 'A'
  }
  deck: Card[];
  hand: Card[];

  onSubmit() {
    this.deck = this.generateDeck();
    console.log('heres da deck beetch: ', this.deck);
    this.hand = this.deal(this.deck);
  }

  generateDeck(): Card[] {
    const deck = [];

    const suits = Object.keys(this.handFilters.suits).filter(suit => this.handFilters.suits[suit]);
    
    const start = this.cardValues.indexOf(this.handFilters.min);
    const end = this.cardValues.indexOf(this.handFilters.max) + 1;
    const values = this.cardValues.slice(start, end);

    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({value, suit});
      });
    });
    return deck;
  }

  deal(deck): Card[] {
    return [];
  }
}

interface Card {
  value: string;
  suit: string;
}
