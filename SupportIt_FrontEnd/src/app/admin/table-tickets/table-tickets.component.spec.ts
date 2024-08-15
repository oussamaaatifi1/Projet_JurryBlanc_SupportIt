import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketsComponent } from './table-tickets.component';

describe('TableTicketsComponent', () => {
  let component: TableTicketsComponent;
  let fixture: ComponentFixture<TableTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTicketsComponent]
    });
    fixture = TestBed.createComponent(TableTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
