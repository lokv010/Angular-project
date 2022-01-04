import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleserversComponent } from './multipleservers.component';

describe('MultipleserversComponent', () => {
  let component: MultipleserversComponent;
  let fixture: ComponentFixture<MultipleserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleserversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
