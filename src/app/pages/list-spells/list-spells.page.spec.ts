import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpellsPage } from './list-spells.page';

describe('ListSpellsPage', () => {
  let component: ListSpellsPage;
  let fixture: ComponentFixture<ListSpellsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpellsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
