// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarComponent } from '../app-bar/app-bar.component';

import { ShortAppBarComponent } from './short-app-bar.component';

describe('ShortAppBarComponent', () => {
  let component: ShortAppBarComponent;
  let fixture: ComponentFixture<ShortAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortAppBarComponent, AppBarComponent]
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
