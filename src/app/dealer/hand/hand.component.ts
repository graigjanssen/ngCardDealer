import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrls: ['./hand.component.scss']
})

export class HandComponent {
    @Input() cards: Card[];
}
