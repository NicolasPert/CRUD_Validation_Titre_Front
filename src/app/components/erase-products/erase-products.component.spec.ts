import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseProductsComponent } from './erase-products.component';

describe('EraseProductsComponent', () => {
  let component: EraseProductsComponent;
  let fixture: ComponentFixture<EraseProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EraseProductsComponent]
    });
    fixture = TestBed.createComponent(EraseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
