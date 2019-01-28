import { TestBed, async } from '@angular/core/testing';
import { DealerComponent } from './dealer.component';
import { HandComponent } from './hand/hand.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

describe('DealerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DealerComponent,
        HandComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule
      ]
    }).compileComponents();
  }));

  it('should create the dealer component', () => {
    const fixture = TestBed.createComponent(DealerComponent);
    const dealer = fixture.debugElement.componentInstance;
    expect(dealer).toBeTruthy();
  });
});
