import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLatestJournalsComponent } from './show-latest-journals.component';

describe('ShowLatestJournalsComponent', () => {
  let component: ShowLatestJournalsComponent;
  let fixture: ComponentFixture<ShowLatestJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLatestJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLatestJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
