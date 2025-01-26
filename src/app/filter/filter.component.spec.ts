import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'mockValue'  // Return mock data when the get method is called
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent,HttpClientTestingModule],
      providers: [
              { provide: ActivatedRoute, useValue: activatedRouteMock }  // Provide the mock
            ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
