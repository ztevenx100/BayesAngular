import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoProbabilidadComponent } from './co-probabilidad.component';

describe('CoProbabilidadComponent', () => {
  let component: CoProbabilidadComponent;
  let fixture: ComponentFixture<CoProbabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoProbabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
