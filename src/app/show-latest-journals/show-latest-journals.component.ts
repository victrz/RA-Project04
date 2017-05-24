import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../model/journal-entries';
import { Router } from '@angular/router';
import { Journal } from '../model/journal';
import { JournalService } from '../service/journal.service';
import { JournalResponse } from '../model/journal-response';
import { JournalContents } from '../model/journal-contents';
@Component({
  selector: 'show-latest-journals',
  templateUrl: './show-latest-journals.component.html',
  styleUrls: ['../../style.css', './show-latest-journals.component.css']
})
export class ShowLatestJournalsComponent implements OnInit {
  currentJournal:Journal;
  journalEntries:JournalContents;
  returnedContents = new JournalContents();
  constructor( private router: Router, private journalService: JournalService) {}

  ngOnInit(): void {
    const myPromiseOfJournals: any = this.journalService.getJournals();
    const extractDataFromPromise: Function = (response) => {
      let myResponse:JournalResponse = <JournalResponse>response as JournalResponse;
      let returnedContents = myResponse.contents;
      let newEntries = new JournalContents();
      let newCount:number = 0;
      for (let item in returnedContents){
        switch (item){
          case "count":
            newCount= returnedContents['count'];
            newEntries.count = newCount;
            //parseInt(newEntries['count'], 10);
            break;
          default:
            let newJournal = new Journal();
            newJournal.id = returnedContents[item]['ID'];
            newJournal.title = returnedContents[item]['title'].replace(/&#039;/g, `'`);
            newJournal.categories = returnedContents[item]['categories'];
            newJournal.image = returnedContents[item]['image'];
            newJournal.date = returnedContents[item]['date'];
            newJournal.author = returnedContents[item]['author'];
            newEntries.allJournals.push(newJournal);
            break;
        }
      }
      this.journalEntries = newEntries;
      console.log(newEntries);
      return newEntries;
    }
    let resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise).then( (r) => { this.journalEntries = r } ));
  }
  gotoDetail(id): void {
    console.log("DETAIL");
    this.router.navigate(['/single-adventure', id]);
  }
}
