import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTicketComponent } from './delete-ticket.component';

describe('DeleteTicketComponent', () => {
  let component: DeleteTicketComponent;
  let fixture: ComponentFixture<DeleteTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
