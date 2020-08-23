import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentpruebaComponent } from './componentprueba.component';

describe('ComponentpruebaComponent', () => {
  let component: ComponentpruebaComponent;
  let fixture: ComponentFixture<ComponentpruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentpruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
