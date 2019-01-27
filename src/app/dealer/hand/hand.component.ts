import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrls: ['./hand.component.scss']
})

export class HandComponent {
    @Input() cards: Card[];
}

interface Card {
    value: string;
    suit: string;
}
