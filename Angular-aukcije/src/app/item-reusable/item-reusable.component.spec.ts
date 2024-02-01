import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReusableComponent } from './item-reusable.component';

describe('ItemReusableComponent', () => {
  let component: ItemReusableComponent;
  let fixture: ComponentFixture<ItemReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
