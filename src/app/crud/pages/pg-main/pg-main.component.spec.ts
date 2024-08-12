import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgMainComponent } from './pg-main.component';

describe('PgMainComponent', () => {
  let component: PgMainComponent;
  let fixture: ComponentFixture<PgMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
