import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserDetails } from './register-user-details';

describe('RegisterUserDetails', () => {
  let component: RegisterUserDetails;
  let fixture: ComponentFixture<RegisterUserDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUserDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
