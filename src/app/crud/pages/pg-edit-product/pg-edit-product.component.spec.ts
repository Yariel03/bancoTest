import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEditProductComponent } from './pg-edit-product.component';

describe('PgEditProductComponent', () => {
  let component: PgEditProductComponent;
  let fixture: ComponentFixture<PgEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgEditProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
