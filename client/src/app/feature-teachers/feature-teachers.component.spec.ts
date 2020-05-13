import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTeachersComponent } from './feature-teachers.component';

describe('FeatureTeachersComponent', () => {
  let component: FeatureTeachersComponent;
  let fixture: ComponentFixture<FeatureTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
