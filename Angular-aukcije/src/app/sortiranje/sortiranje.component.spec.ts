import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortiranjeComponent } from './sortiranje.component';

describe('SortiranjeComponent', () => {
  let component: SortiranjeComponent;
  let fixture: ComponentFixture<SortiranjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortiranjeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortiranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
