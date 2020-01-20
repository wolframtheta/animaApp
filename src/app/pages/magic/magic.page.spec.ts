import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicPage } from './magic.page';

describe('MagicPage', () => {
  let component: MagicPage;
  let fixture: ComponentFixture<MagicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
