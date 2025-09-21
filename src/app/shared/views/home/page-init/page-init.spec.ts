import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInit } from './page-init';

describe('PageInit', () => {
  let component: PageInit;
  let fixture: ComponentFixture<PageInit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
