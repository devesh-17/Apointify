import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSettingsComponent } from './b-settings.component';

describe('BSettingsComponent', () => {
  let component: BSettingsComponent;
  let fixture: ComponentFixture<BSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
