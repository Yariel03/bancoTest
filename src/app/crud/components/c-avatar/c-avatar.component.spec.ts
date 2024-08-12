import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAvatarComponent } from './c-avatar.component';

describe('CAvatarComponent', () => {
  let component: CAvatarComponent;
  let fixture: ComponentFixture<CAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
