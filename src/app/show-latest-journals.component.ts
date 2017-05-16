import { Component, OnInit } from '@angular/core';
import { JournalEntries } from './model/journal-entries';
import { Journal } from './model/journal';
import { JournalService } from './service/journal.service';
import { JournalResponse } from './model/journal-response';

@Component({
  selector: 'show-latest-journals',
  templateUrl: './show-latest-journals.component.html',
  styleUrls: ['../style.css']
})
export class ShowLatestJournalsComponent implements OnInit {
  currentJournal:Journal;
  journalEntries:JournalEntries;
  constructor(private journalService: JournalService) {}
    //console.log('creating show-latest-journals component');

  ngOnInit(): void {
    console.log('initializing show-latest-journals view');
    const myPromiseOfJournals: any = this.journalService.getJournals();
    const extractDataFromPromise: Function = (response) => {
      let myEntries:JournalResponse = <JournalResponse>response as JournalResponse;
      let newEntries = new JournalEntries();
      for (const item in myEntries){
        let newJournal = new Journal();
        switch (item){
          case "count":
            myEntries.count = parseInt(newJournal['count'], 10);
            //add count item alongside journals array
            //newEntries.journals[item] = newJournal
            break;
          default:
            newJournal.id = myEntries[item]['ID'];
            newJournal.title = myEntries[item]['title'];
            newJournal.categories = myEntries[item]['categories'];
            newJournal.image = myEntries[item]['image'];
            newJournal.date = myEntries[item]['date'];
            newJournal.author = myEntries[item]['author'];
            newEntries.journals[item] = newJournal;
            break;
        }
        newEntries.journals.push(newJournal);
      }
      console.log("HERE");
      console.log(newEntries.journals);
      this.journalEntries = newEntries;
      console.log(this.journalEntries);
      this.dosomething(this.journalEntries);
      return newEntries;
    }
    const resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise));
  }
  dosomething(j){
    console.log(j);
    //render view here!
    //latest adventures: [.length][.length-1][.length-2][.length-3]
  }
}
