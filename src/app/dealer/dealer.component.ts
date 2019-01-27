import { Component } from '@angular/core';

@Component({
    selector: 'app-dealer',
    templateUrl: './dealer.component.html',
    styleUrls: ['./dealer.component.scss']
})

export class DealerComponent {
    cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  handFilters = {
    suits: {
      spade: true,
      club: true,
      diamond: true,
      heart: true
    },
    size: 1,
    min: '2',
    max: 'A'
  }
  deck: Card[];
  hand: Card[];
  maxHandSize = 52;

  onSubmit() {
    this.deck = this.generateDeck();
    this.hand = this.deal(this.deck);
  }

  updateMaxHandSize() {
    const deckProperties = this.getDeckProperties();

    this.maxHandSize = deckProperties.suits.length * deckProperties.values.length;
  }

  generateDeck(): Card[] {
    const deck = [];

    const deckProperties = this.getDeckProperties();

    deckProperties.suits.forEach(suit => {
      deckProperties.values.forEach(value => {
        deck.push({value, suit});
      });
    });

    return deck;
  }

  deal(deck: Card[]): Card[] {
    const indices = [];
    const hand = [];
    while (indices.length < this.handFilters.size) {
      const randomIndex = this.getRandomIndex();
      if (indices.indexOf(randomIndex) === -1) {
        indices.push(randomIndex);
      }
    }

    indices.forEach(index => { hand.push(deck[index]); });

    return hand;
  }

  getDeckProperties() {
    const suits = Object.keys(this.handFilters.suits).filter(suit => this.handFilters.suits[suit]);
    
    const start = this.cardValues.indexOf(this.handFilters.min);
    const end = this.cardValues.indexOf(this.handFilters.max) + 1;
    const values = this.cardValues.slice(start, end);

    return {suits, values};
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.deck.length);
  }
}

interface Card {
    value: string;
    suit: string;
  }