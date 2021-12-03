// © Daimler TSS GmbH
// SPDX-License-Identifier: MIT

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppOverviewComponent } from './components/app-overview/app-overview.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppOverviewComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Product Kit Angular Component Overview'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Product Kit Angular Component Overview');
  });
});
