import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('spade', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/spade.svg'));
    this.iconRegistry.addSvgIcon('club', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/club.svg'));
    this.iconRegistry.addSvgIcon('diamond', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/diamond.svg'));
    this.iconRegistry.addSvgIcon('heart', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/heart.svg'));
  }
}