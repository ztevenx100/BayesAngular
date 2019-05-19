import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProbabilidadComponent } from './multi-probabilidad.component';

describe('MultiProbabilidadComponent', () => {
  let component: MultiProbabilidadComponent;
  let fixture: ComponentFixture<MultiProbabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiProbabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
