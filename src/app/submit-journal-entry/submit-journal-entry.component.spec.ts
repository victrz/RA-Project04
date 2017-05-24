import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJournalEntryComponent } from './submit-journal-entry.component';

describe('SubmitJournalEntryComponent', () => {
  let component: SubmitJournalEntryComponent;
  let fixture: ComponentFixture<SubmitJournalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitJournalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
