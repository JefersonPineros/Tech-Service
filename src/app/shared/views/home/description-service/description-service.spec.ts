import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionService } from './description-service';

describe('DescriptionService', () => {
  let component: DescriptionService;
  let fixture: ComponentFixture<DescriptionService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
