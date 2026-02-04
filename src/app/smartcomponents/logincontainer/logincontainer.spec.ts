import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logincontainer } from './logincontainer';

describe('Logincontainer', () => {
  let component: Logincontainer;
  let fixture: ComponentFixture<Logincontainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logincontainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logincontainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
