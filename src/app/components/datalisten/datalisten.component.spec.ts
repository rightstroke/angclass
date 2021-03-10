import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistenComponent } from './datalisten.component';

describe('DatalistenComponent', () => {
  let component: DatalistenComponent;
  let fixture: ComponentFixture<DatalistenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalistenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalistenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
