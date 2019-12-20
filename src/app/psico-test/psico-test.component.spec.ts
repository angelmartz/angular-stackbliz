import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoTestComponent } from './psico-test.component';

describe('PsicoTestComponent', () => {
  let component: PsicoTestComponent;
  let fixture: ComponentFixture<PsicoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
