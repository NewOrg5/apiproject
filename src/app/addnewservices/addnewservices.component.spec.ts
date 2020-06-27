import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewservicesComponent } from './addnewservices.component';

describe('AddnewservicesComponent', () => {
  let component: AddnewservicesComponent;
  let fixture: ComponentFixture<AddnewservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
