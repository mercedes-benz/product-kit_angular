// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabButtonsComponent } from './fab-buttons.component';

describe('FabButtonsComponent', () => {
  let component: FabButtonsComponent;
  let fixture: ComponentFixture<FabButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabButtonsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
