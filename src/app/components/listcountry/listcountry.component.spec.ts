import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcountryComponent } from './listcountry.component';

describe('ListcountryComponent', () => {
  let component: ListcountryComponent;
  let fixture: ComponentFixture<ListcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
