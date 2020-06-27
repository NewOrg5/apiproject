import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicepopupComponent } from './addservicepopup.component';

describe('AddservicepopupComponent', () => {
  let component: AddservicepopupComponent;
  let fixture: ComponentFixture<AddservicepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddservicepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
