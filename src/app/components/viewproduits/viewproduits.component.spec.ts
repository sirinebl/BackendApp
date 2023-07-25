import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproduitsComponent } from './viewproduits.component';

describe('ViewproduitsComponent', () => {
  let component: ViewproduitsComponent;
  let fixture: ComponentFixture<ViewproduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproduitsComponent]
    });
    fixture = TestBed.createComponent(ViewproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
