import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNewProdutComponent } from './pg-new-produt.component';

describe('PgNewProdutComponent', () => {
  let component: PgNewProdutComponent;
  let fixture: ComponentFixture<PgNewProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgNewProdutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgNewProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
