// Angular import
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // media 1025 After Use Menu Open
  @Output() NavCollapsedMob = new EventEmitter();

  navCollapsedMob;
  windowWidth: number;

  // Constructor
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
    this.navCollapsedMob = false;
  }

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
