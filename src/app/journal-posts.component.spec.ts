import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalPostsComponent } from './journal-posts.component';

describe('JournalPostsComponent', () => {
  let component: JournalPostsComponent;
  let fixture: ComponentFixture<JournalPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
