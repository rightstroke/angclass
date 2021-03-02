import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrabankftComponent } from './intrabankft.component';

describe('IntrabankftComponent', () => {
  let component: IntrabankftComponent;
  let fixture: ComponentFixture<IntrabankftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrabankftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrabankftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
