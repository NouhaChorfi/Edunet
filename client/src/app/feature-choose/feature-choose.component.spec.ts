import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureChooseComponent } from './feature-choose.component';

describe('FeatureChooseComponent', () => {
  let component: FeatureChooseComponent;
  let fixture: ComponentFixture<FeatureChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
