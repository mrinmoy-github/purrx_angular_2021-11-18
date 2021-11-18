import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lander2Component } from './lander2.component';

describe('Lander2Component', () => {
  let component: Lander2Component;
  let fixture: ComponentFixture<Lander2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lander2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lander2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
