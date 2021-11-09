// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAppBarComponent } from './short-app-bar.component';

describe('ShortAppBarComponent', () => {
  let component: ShortAppBarComponent;
  let fixture: ComponentFixture<ShortAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortAppBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
