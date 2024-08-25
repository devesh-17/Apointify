// Angular import
import { isPlatformBrowser } from '@angular/common';
import { Component, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';

// icons
import { IconService } from '@ant-design/icons-angular';
import { MenuUnfoldOutline, MenuFoldOutline, SearchOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  // public props
  @Input() navCollapsed!: boolean;
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  windowWidth: number;

  // Constructor
  constructor(
    private iconService: IconService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
    this.iconService.addIcon(...[MenuUnfoldOutline, MenuFoldOutline, SearchOutline]);
  }

  // public method
  navCollapse() {
    this.NavCollapse.emit();
  }
}
