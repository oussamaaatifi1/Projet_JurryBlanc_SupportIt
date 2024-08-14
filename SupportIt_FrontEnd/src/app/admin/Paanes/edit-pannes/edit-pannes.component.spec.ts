import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPannesComponent } from './edit-pannes.component';

describe('EditPannesComponent', () => {
  let component: EditPannesComponent;
  let fixture: ComponentFixture<EditPannesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPannesComponent]
    });
    fixture = TestBed.createComponent(EditPannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
