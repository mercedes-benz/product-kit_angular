// SPDX-License-Identifier: MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldComponent } from './text-field.component';

describe('TextfieldComponent', () => {
  let component: TextFieldComponent;
  let fixture: ComponentFixture<TextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
