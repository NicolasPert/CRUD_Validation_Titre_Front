import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProductsComponent } from './change-products.component';

describe('ChangeProductsComponent', () => {
  let component: ChangeProductsComponent;
  let fixture: ComponentFixture<ChangeProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeProductsComponent]
    });
    fixture = TestBed.createComponent(ChangeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
