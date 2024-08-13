import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPannesComponent } from './add-pannes.component';

describe('AddPannesComponent', () => {
  let component: AddPannesComponent;
  let fixture: ComponentFixture<AddPannesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPannesComponent]
    });
    fixture = TestBed.createComponent(AddPannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
