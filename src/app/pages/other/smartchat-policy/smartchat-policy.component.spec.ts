import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartchatPolicyComponent } from './smartchat-policy.component';

describe('SmartchatPolicyComponent', () => {
  let component: SmartchatPolicyComponent;
  let fixture: ComponentFixture<SmartchatPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartchatPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartchatPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
