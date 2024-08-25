// angular import
import { isPlatformBrowser } from '@angular/common';
import { Component, Output, EventEmitter, HostListener, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  // public props
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();

  navCollapsed = false;
  windowWidth: number;
  navCollapsedMob;

  // Constructor
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
    this.navCollapsedMob = false;
  }

  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line
  onResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
    this.navCollapseMob();
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
