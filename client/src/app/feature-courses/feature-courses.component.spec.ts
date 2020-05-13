import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCoursesComponent } from './feature-courses.component';

describe('FeatureCoursesComponent', () => {
  let component: FeatureCoursesComponent;
  let fixture: ComponentFixture<FeatureCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
