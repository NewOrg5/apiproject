import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratenewapikeyComponent } from './generatenewapikey.component';

describe('GeneratenewapikeyComponent', () => {
  let component: GeneratenewapikeyComponent;
  let fixture: ComponentFixture<GeneratenewapikeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratenewapikeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratenewapikeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
