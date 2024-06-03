import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExperienceComponent } from './my-experience.component';

describe('MyExperienceComponent', () => {
  let component: MyExperienceComponent;
  let fixture: ComponentFixture<MyExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
