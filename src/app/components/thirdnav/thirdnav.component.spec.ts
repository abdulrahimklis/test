import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdnavComponent } from './thirdnav.component';

describe('ThirdnavComponent', () => {
  let component: ThirdnavComponent;
  let fixture: ComponentFixture<ThirdnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
