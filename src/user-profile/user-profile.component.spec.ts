import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  // Create a mock for ActivatedRoute
  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'mockValue'  // Return mock data when the get method is called
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent,HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }  // Provide the mock
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should access route param', () => {
//     const activatedRoute = TestBed.inject(ActivatedRoute);
//     spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('mockValue');  // Mock route param

//     expect(component.someValueFromRoute).toBe('role');
//   });
});
